# موقع المجلات العلمية - كلية السلام الجامعة

موقع إلكتروني متكامل لإدارة وعرض المجلات العلمية لكلية السلام الجامعة.

## 🚀 التقنيات المستخدمة

- **الخادم (Backend):** Node.js + Express.js
- **قاعدة البيانات:** MongoDB + Mongoose
- **العميل (Frontend):** React.js
- **المصادقة:** JWT

## 📁 هيكل المشروع

```
scientific-magazines/
├── server/               # خادم Node.js
│   ├── controllers/      # معالجات الطلبات
│   ├── models/           # نماذج البيانات
│   ├── routes/           # المسارات
│   ├── middleware/       # البرمجيات الوسيطة
│   ├── utils/            # دوال مساعدة
│   ├── config/           # ملفات الإعدادات
│   └── index.js          # ملف البداية
├── client/               # تطبيق React
│   ├── public/           # ملفات عامة
│   └── src/
│       ├── components/   # مكونات React
│       ├── pages/        # الصفحات
│       ├── styles/       # أنماط CSS
│       └── utils/        # دوال مساعدة
├── docs/                 # التوثيق
├── .env.example          # مثال على ملف البيئة
├── CONTRIBUTING.md       # إرشادات المساهمة
└── LICENSE               # رخصة MIT
```

## ⚙️ التثبيت

### المتطلبات الأساسية
- Node.js >= 14
- MongoDB

### خطوات التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/haithamaomar-create/scientific-magazines.git
cd scientific-magazines

# تثبيت اعتماديات الخادم
npm install

# إعداد ملف البيئة
cp .env.example .env
# قم بتعديل .env بالقيم المناسبة

# تشغيل الخادم
npm start
```

### تشغيل العميل

```bash
cd client
npm install
npm start
```

## 🌐 نقاط النهاية (API Endpoints)

| الطريقة | المسار | الوصف |
|---------|--------|-------|
| GET | /api/health | فحص حالة الخادم |
| GET | /api/magazines | الحصول على جميع المجلات |
| GET | /api/magazines/:id | الحصول على مجلة محددة |

## 🤝 المساهمة

راجع [CONTRIBUTING.md](CONTRIBUTING.md) للتفاصيل.

## 📄 الرخصة

هذا المشروع مرخص بموجب [رخصة MIT](LICENSE).
