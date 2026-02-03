# from pathlib import Path
# import os

# BASE_DIR = Path(__file__).resolve().parent.parent

# # 🔐 Security
# SECRET_KEY = os.environ.get(
#     "SECRET_KEY",
#     "django-insecure-fallback-key"
# )

# DEBUG = False

# ALLOWED_HOSTS = [
#     "127.0.0.1",
#     "localhost",
#     "breast-cancer-detection-1-3i4b.onrender.com",
#     ".onrender.com",
# ]

# # ✅ Applications
# INSTALLED_APPS = [
#     "django.contrib.admin",
#     "django.contrib.auth",
#     "django.contrib.contenttypes",
#     "django.contrib.sessions",
#     "django.contrib.messages",
#     "django.contrib.staticfiles",

#     "rest_framework",
#     "corsheaders",
#     "api",
# ]

# # ✅ Middleware (ORDER MATTERS)
# MIDDLEWARE = [
#     "corsheaders.middleware.CorsMiddleware",
#     "django.middleware.security.SecurityMiddleware",

#     "whitenoise.middleware.WhiteNoiseMiddleware",

#     "django.contrib.sessions.middleware.SessionMiddleware",
#     "django.middleware.common.CommonMiddleware",
#     "django.middleware.csrf.CsrfViewMiddleware",
#     "django.contrib.auth.middleware.AuthenticationMiddleware",
#     "django.contrib.messages.middleware.MessageMiddleware",
#     "django.middleware.clickjacking.XFrameOptionsMiddleware",
# ]

# ROOT_URLCONF = "backend.urls"

# # ✅ Templates
# TEMPLATES = [
#     {
#         "BACKEND": "django.template.backends.django.DjangoTemplates",
#         "DIRS": [],
#         "APP_DIRS": True,
#         "OPTIONS": {
#             "context_processors": [
#                 "django.template.context_processors.debug",
#                 "django.template.context_processors.request",
#                 "django.contrib.auth.context_processors.auth",
#                 "django.contrib.messages.context_processors.messages",
#             ],
#         },
#     },
# ]

# WSGI_APPLICATION = "backend.wsgi.application"

# # ✅ Database (SQLite OK for Render demo)
# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.sqlite3",
#         "NAME": BASE_DIR / "db.sqlite3",
#     }
# }

# # ✅ Language & Time
# LANGUAGE_CODE = "en-us"
# TIME_ZONE = "UTC"
# USE_I18N = True
# USE_TZ = True

# # ✅ Static files (Render requirement)
# STATIC_URL = "/static/"
# STATIC_ROOT = BASE_DIR / "staticfiles"

# STATICFILES_STORAGE = (
#     "whitenoise.storage.CompressedManifestStaticFilesStorage"
# )

# # ✅ CORS (Vercel frontend)
# CORS_ALLOWED_ORIGINS = [
#     "https://breast-cancer-detection-rosy.vercel.app",
# ]

# CORS_ALLOW_CREDENTIALS = True

# # Optional but safe
# CORS_ALLOW_HEADERS = [
#     "accept",
#     "accept-encoding",
#     "authorization",
#     "content-type",
#     "origin",
#     "user-agent",
#     "x-csrftoken",
#     "x-requested-with",
# ]

# CORS_ALLOW_METHODS = [
#     "GET",
#     "POST",
#     "PUT",
#     "PATCH",
#     "DELETE",
#     "OPTIONS",
# ]

# DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent

# 🔐 Security
SECRET_KEY = os.environ.get("SECRET_KEY", "django-insecure-fallback-key")

DEBUG = False

ALLOWED_HOSTS = [
    "127.0.0.1",
    "localhost",
    "breast-cancer-detection-2-4oyg.onrender.com",  # your render URL
]

# ✅ Applications
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    "rest_framework",
    "corsheaders",
    "api",
]

# ✅ Middleware (ORDER MATTERS)
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",  # Must be first
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "backend.urls"

# ✅ Templates
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "backend.wsgi.application"

# ✅ Database
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# ✅ Static files (Render requirement)
STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

# ✅ CORS Settings
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # local dev
    "https://https://breast-cancer-detection-rosy.vercel.app/",  # your frontend deployment
]
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_HEADERS = ["*"]
CORS_ALLOW_METHODS = ["*"]

# ✅ Language & Time
LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

