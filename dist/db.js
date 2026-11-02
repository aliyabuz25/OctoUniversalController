import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, '..', 'data', 'store.json');
export class Database {
    static readData() {
        try {
            const raw = fs.readFileSync(DB_PATH, 'utf-8');
            return JSON.parse(raw);
        }
        catch (err) {
            console.error('Error reading store.json, returning empty structure', err);
            return {
                site: {
                    name: 'Production Storefront',
                    domain: 'https://mystore.az',
                    type: 'Next.js + Headless Engine',
                    endpoint: 'https://api.mystore.az/v1'
                },
                seo: {},
                translations: [],
                records: [],
                media: [],
                uploadConfig: {
                    maxFileSizeMB: 15,
                    allowedMimeTypes: 'image/jpeg,image/png,image/webp,image/svg+xml,application/pdf',
                    uploadDir: 'uploads'
                },
                admin: {
                    fullName: 'Super Admin',
                    email: 'admin@nexus.az',
                    role: 'Baş İnzibatçı'
                },
                setup: {
                    completed: false
                }
            };
        }
    }
    static writeData(data) {
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
    }
    static getSiteConfig() {
        return this.readData().site;
    }
    static updateSiteConfig(update) {
        const data = this.readData();
        data.site = {
            ...data.site,
            ...update
        };
        this.writeData(data);
        return data.site;
    }
    static getSeo() {
        return this.readData().seo;
    }
    static updateSeo(update) {
        const data = this.readData();
        data.seo = {
            ...data.seo,
            ...update,
            lastUpdated: new Date().toISOString()
        };
        this.writeData(data);
        return data.seo;
    }
    static getTranslations() {
        return this.readData().translations;
    }
    static updateTranslation(key, values) {
        const data = this.readData();
        const idx = data.translations.findIndex(t => t.key === key);
        if (idx !== -1) {
            data.translations[idx] = { ...data.translations[idx], ...values };
            this.writeData(data);
            return data.translations[idx];
        }
        else {
            const newItem = {
                key,
                module: values.module || 'common',
                type: values.type || 'text',
                az: values.az || '',
                tr: values.tr || '',
                ru: values.ru || '',
                en: values.en || ''
            };
            data.translations.unshift(newItem);
            this.writeData(data);
            return newItem;
        }
    }
    static getRecords() {
        return this.readData().records;
    }
    static addRecord(record) {
        const data = this.readData();
        const newRecord = {
            ...record,
            id: `REC-${Math.floor(1000 + Math.random() * 9000)}`
        };
        data.records.unshift(newRecord);
        this.writeData(data);
        return newRecord;
    }
    static getMedia() {
        const data = this.readData();
        return data.media || [];
    }
    static addMedia(item) {
        const data = this.readData();
        if (!data.media)
            data.media = [];
        const newMedia = {
            ...item,
            id: `MED-${Date.now().toString(36)}`,
            createdAt: new Date().toISOString()
        };
        data.media.unshift(newMedia);
        this.writeData(data);
        return newMedia;
    }
    static deleteMedia(id) {
        const data = this.readData();
        if (!data.media)
            return null;
        const idx = data.media.findIndex(m => m.id === id);
        if (idx === -1)
            return null;
        const removed = data.media.splice(idx, 1)[0];
        this.writeData(data);
        return removed;
    }
    static getUploadConfig() {
        const data = this.readData();
        return data.uploadConfig || {
            maxFileSizeMB: 15,
            allowedMimeTypes: 'image/jpeg,image/png,image/webp,image/svg+xml,application/pdf',
            uploadDir: 'uploads'
        };
    }
    static updateUploadConfig(update) {
        const data = this.readData();
        data.uploadConfig = {
            ...this.getUploadConfig(),
            ...update
        };
        this.writeData(data);
        return data.uploadConfig;
    }
    static getAdmin() {
        const data = this.readData();
        return data.admin || {
            fullName: 'Super Admin',
            email: 'admin@nexus.az',
            role: 'Baş İnzibatçı'
        };
    }
    static updateAdmin(update) {
        const data = this.readData();
        data.admin = {
            ...this.getAdmin(),
            ...update
        };
        this.writeData(data);
        return data.admin;
    }
    static getSetup() {
        const data = this.readData();
        return data.setup || { completed: false };
    }
    static completeSetup(payload) {
        const data = this.readData();
        if (payload.site) {
            data.site = {
                ...data.site,
                ...payload.site
            };
            if (payload.site.domain && data.seo) {
                data.seo.canonical = payload.site.domain;
            }
        }
        if (payload.admin) {
            data.admin = {
                ...this.getAdmin(),
                ...payload.admin
            };
        }
        if (payload.uploadConfig) {
            data.uploadConfig = {
                ...this.getUploadConfig(),
                ...payload.uploadConfig
            };
        }
        data.setup = {
            completed: true,
            industry: payload.industry || 'E-commerce & Storefront',
            setupDate: new Date().toISOString()
        };
        this.writeData(data);
        return {
            site: data.site,
            admin: data.admin,
            uploadConfig: data.uploadConfig,
            setup: data.setup
        };
    }
    static resetSetup() {
        const data = this.readData();
        data.setup = { completed: false };
        this.writeData(data);
        return data.setup;
    }
}
