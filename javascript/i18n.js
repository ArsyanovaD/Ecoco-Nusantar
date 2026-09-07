/* ================= I18N ENGINE ================= */
/* Lightweight i18n system using data-i18n attributes + translations.js */

(function () {
    'use strict';

    var SUPPORTED = ['en', 'ko', 'ar', 'ja'];
    var LANG_LABELS = { en: 'EN', ko: 'KO', ar: 'AR', ja: 'JA' };
    var STORAGE_KEY = 'ecoco_lang';
    var currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

    function applyTranslations() {
        var dict = typeof translations !== 'undefined' ? translations : null;
        if (!dict) return;

        var lang = currentLang;

        /* Set html lang */
        document.documentElement.lang = lang;

        /* Translate all [data-i18n] elements */
        var els = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            var key = el.getAttribute('data-i18n');
            if (dict[key] && dict[key][lang]) {
                el.innerHTML = dict[key][lang];
            }
        }

        /* Translate all [data-i18n-placeholder] on inputs */
        var inputs = document.querySelectorAll('[data-i18n-placeholder]');
        for (var j = 0; j < inputs.length; j++) {
            var inp = inputs[j];
            var pKey = inp.getAttribute('data-i18n-placeholder');
            if (dict[pKey] && dict[pKey][lang]) {
                inp.placeholder = dict[pKey][lang];
            }
        }

        /* Translate all [data-i18n-attr] with format "key:attrName" */
        var attrEls = document.querySelectorAll('[data-i18n-attr]');
        for (var k = 0; k < attrEls.length; k++) {
            var aEl = attrEls[k];
            var spec = aEl.getAttribute('data-i18n-attr').split(':');
            if (spec.length === 2 && dict[spec[0]] && dict[spec[0]][lang]) {
                aEl.setAttribute(spec[1], dict[spec[0]][lang]);
            }
        }

        /* Update lang-pill button text */
        var pillSpans = document.querySelectorAll('.lang-pill span:not(.globe-icon)');
        for (var p = 0; p < pillSpans.length; p++) {
            pillSpans[p].textContent = LANG_LABELS[lang] || lang.toUpperCase();
        }

        /* Store preference */
        localStorage.setItem(STORAGE_KEY, lang);
    }

    function setLanguage(lang) {
        if (SUPPORTED.indexOf(lang) === -1) return;
        currentLang = lang;
        applyTranslations();
    }

    function getCurrentLang() {
        return currentLang;
    }

    /* ===== LANG-PILL DROPDOWN ===== */
    function initLangPill() {
        var pills = document.querySelectorAll('.lang-pill');
        if (!pills.length) return;

        pills.forEach(function (pill) {
            /* Create dropdown */
            var dropdown = document.createElement('div');
            dropdown.className = 'lang-dropdown';
            dropdown.setAttribute('role', 'listbox');

            SUPPORTED.forEach(function (lang) {
                var opt = document.createElement('button');
                opt.type = 'button';
                opt.className = 'lang-option' + (lang === currentLang ? ' active' : '');
                opt.textContent = lang.toUpperCase();
                opt.setAttribute('role', 'option');
                opt.setAttribute('data-lang', lang);
                opt.addEventListener('click', function (e) {
                    e.stopPropagation();
                    setLanguage(lang);
                    dropdown.querySelectorAll('.lang-option').forEach(function (o) {
                        o.classList.toggle('active', o.getAttribute('data-lang') === lang);
                    });
                    dropdown.classList.remove('open');
                });
                dropdown.appendChild(opt);
            });

            pill.style.position = 'relative';
            pill.appendChild(dropdown);

            pill.addEventListener('click', function (e) {
                e.stopPropagation();
                dropdown.classList.toggle('open');
            });
        });

        /* Close dropdown on outside click */
        document.addEventListener('click', function () {
            document.querySelectorAll('.lang-dropdown.open').forEach(function (d) {
                d.classList.remove('open');
            });
        });
    }

    /* ===== EXPOSE GLOBAL API ===== */
    window.EcocoI18n = {
        set: setLanguage,
        get: getCurrentLang,
        apply: applyTranslations
    };

    /* ===== AUTO-INIT ===== */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initLangPill();
            applyTranslations();
        });
    } else {
        initLangPill();
        applyTranslations();
    }
})();
