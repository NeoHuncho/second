const htmlString = `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <link
      type="application/opensearchdescription+xml"
      rel="search"
      href="/opensearch.xml"
    />
    <meta name="theme-color" content="#ffffff" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:site_name" content="leboncoin" />
    <meta name="twitter:site" content="leboncoin" />
    <meta http-equiv="P3P" content='CP="This is not a P3P policy"' />
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0"
    />
    <meta
      name="google-site-verification"
      content="uyio912RR__InwCKsO90G9r8UeP6ia3EeZwY6KaBRrk"
    />
    <meta
      name="facebook-domain-verification"
      content="hbda5pvr14cpxa63ojjexw311iyf7c"
    />
    <link rel="canonical" href="https://www.leboncoin.fr/recherche" />
    <link
      rel="icon"
      type="image/png"
      href="/_next/static/media/favicon-16.fe104e12.png"
      sizes="16x16"
      data-test-id="no-unread-msgs"
    />
    <link
      rel="icon"
      type="image/png"
      href="/_next/static/media/favicon-32.e6c3ce2a.png"
      sizes="32x32"
    />
    <script src="//tag.aticdn.net/598455/smarttag.js"></script>
    <script>
      try {
        var tagCnil = new ATInternet.Tracker.Tag({
          secure: !0,
          site: '562498',
        });
        (window.didomiEventListeners = window.didomiEventListeners || []),
          window.didomiEventListeners.push({
            event: 'notice.shown',
            listener: function () {
              tagCnil.click.send({
                elem: this,
                name: 'cnilBandeau',
                type: 'navigation',
                level2: '0',
              });
            },
          }),
          window.didomiEventListeners.push({
            event: 'notice.clickagree',
            listener: function () {
              tagCnil.click.send({
                elem: this,
                name: 'cnilBoutonAccepter',
                type: 'navigation',
                level2: '0',
              });
            },
          }),
          window.didomiEventListeners.push({
            event: 'notice.clickdisagree',
            listener: function () {
              tagCnil.click.send({
                elem: this,
                name: 'cnilBoutonRefuser',
                type: 'navigation',
                level2: '0',
              });
            },
          }),
          window.didomiEventListeners.push({
            event: 'notice.clickmoreinfo',
            listener: function () {
              tagCnil.click.send({
                elem: this,
                name: 'cnilBoutonPersonnaliser',
                type: 'navigation',
                level2: '0',
              });
            },
          });
      } catch {}
    </script>
    <script>
      (function (window, document) {
        /*
         * Initialise Tracking
         */
        if (!window.trackingPreRequest) {
          window.trackingPreRequest = [];
        }
        var ref = document.location.pathname;
        var sessionStorageAvailable;
        var preReqPagename = null;

        try {
          sessionStorageAvailable = !!window.sessionStorage;
        } catch (e) {
          sessionStorageAvailable = false;
        }

        if (ref === '/' && sessionStorageAvailable) {
          preReqPagename = 'accueil';
        }

        if (
          (ref.indexOf('/offres') !== -1 ||
            ref.indexOf('/demandes') !== -1 ||
            ref.indexOf('/recherche') !== -1 ||
            ref.indexOf('/annonces/') !== -1) &&
          sessionStorageAvailable
        ) {
          preReqPagename = 'ad_search';
        }
        if (
          ref.indexOf('/offre/') !== -1 ||
          (ref.indexOf('.htm') !== -1 &&
            (ref.indexOf('vi') !== -1 ||
              [
                '_vehicules_',
                'voitures',
                'motos',
                'caravaning',
                'utilitaires',
                'equipement_auto',
                'nautisme',
                '_immobilier_',
                'ventes_immobilieres',
                'locations',
                'colocations',
                'locations_gites',
                'bureaux_commerces',
                '_multimedia_',
                'informatique',
                'image_son',
                'telephonie',
                '_maison_',
                'ameublement',
                'electromenager',
                'bricolage',
                'vetements',
                'equipement_bebe',
                '_loisirs_',
                'dvd_films',
                'cd_musique',
                'livres',
                'animaux',
                'sports_hobbies',
                'instruments_de_musique',
                '_services_',
                'equipements_industriels',
                'offres_d_emploi',
                'prestations_de_services',
                'billetterie',
                'cours_particuliers',
                '_divers_',
                'autres',
                'decoration',
                'collection',
                'jeux_jouets',
                'montres_bijoux',
                'consoles_jeux_video',
                'equipement_moto',
                'arts_de_la_table',
                'linge_de_maison',
                'accessoires_bagagerie',
                'vins_gastronomie',
                'evenements',
                'equipement_caravaning',
                'equipement_nautisme',
                'jardinage',
                'chaussures',
                'vetements_bebe',
                'velos',
                '_materiel_professionnel_',
                'materiel_agricole',
                'transport_manutention',
                'btp_chantier_gros_oeuvre',
                'outillage_materiaux_2nd_oeuvre',
                'restauration_hotellerie',
                'fournitures_de_bureau',
                'commerces_marches',
                'materiel_medical',
                'covoiturage',
                '_vacances_',
                'chambres_d_hotes',
                'campings',
                'hotels',
                'hebergements_insolites',
                '_emploi_',
                '_mode_',
                'formations_professionnelles',
                '_animaux_',
              ].some(function (channel) {
                return ref.indexOf(channel) !== -1;
              })) &&
            sessionStorageAvailable)
        ) {
          preReqPagename = 'ad_view::detail';
        }

        if (preReqPagename && sessionStorageAvailable) {
          var trackingPreRequestValue =
            sessionStorage.getItem('trackingPreRequest') || '';
          if (trackingPreRequestValue !== '') {
            trackingPreRequestValue += '___';
          }

          trackingPreRequestValue +=
            preReqPagename +
            '|' +
            Date.now() +
            '|' +
            encodeURIComponent(document.referrer);

          sessionStorage.setItem('trackingPreRequest', trackingPreRequestValue);
        }
      })(window, document);
    </script>
    <title>Toute la France - leboncoin</title>
    <script
      type="text/javascript"
      src="//static.criteo.net/js/px.js?ch=1"
    ></script>
    <script
      type="text/javascript"
      src="//static.criteo.net/js/px.js?ch=2"
    ></script>
    <script>
      (function (g, o) {
        (g[o] =
          g[o] ||
          function () {
            (g[o]['q'] = g[o]['q'] || []).push(arguments);
          }),
          (g[o]['t'] = 1 * new Date());
      })(window, '_googCsa');
    </script>
    <meta
      name="description"
      content="Toutes nos annonces gratuites Toute la France. Consultez nos 9465 annonces de particuliers et professionnels sur leboncoin"
      data-test-id="meta-name-description"
    />
    <meta
      name="robots"
      content="noindex, nofollow"
      data-test-id="meta-name-robots"
    />
    <meta name="next-head-count" content="22" />
    <script>
      window.gdprAppliesGlobally = true;
      (function () {
        function a(e) {
          if (!window.frames[e]) {
            if (document.body && document.body.firstChild) {
              var t = document.body;
              var n = document.createElement('iframe');
              n.style.display = 'none';
              n.name = e;
              n.title = e;
              t.insertBefore(n, t.firstChild);
            } else {
              setTimeout(function () {
                a(e);
              }, 5);
            }
          }
        }
        function e(n, r, o, c, s) {
          function e(e, t, n, a) {
            if (typeof n !== 'function') {
              return;
            }
            if (!window[r]) {
              window[r] = [];
            }
            var i = false;
            if (s) {
              i = s(e, t, n);
            }
            if (!i) {
              window[r].push({
                command: e,
                parameter: t,
                callback: n,
                version: a,
              });
            }
          }
          e.stub = true;
          function t(a) {
            if (!window[n] || window[n].stub !== true) {
              return;
            }
            if (!a.data) {
              return;
            }
            var i = typeof a.data === 'string';
            var e;
            try {
              e = i ? JSON.parse(a.data) : a.data;
            } catch (t) {
              return;
            }
            if (e[o]) {
              var r = e[o];
              window[n](
                r.command,
                r.parameter,
                function (e, t) {
                  var n = {};
                  n[c] = { returnValue: e, success: t, callId: r.callId };
                  a.source.postMessage(i ? JSON.stringify(n) : n, '*');
                },
                r.version
              );
            }
          }
          if (typeof window[n] !== 'function') {
            window[n] = e;
            if (window.addEventListener) {
              window.addEventListener('message', t, false);
            } else {
              window.attachEvent('onmessage', t);
            }
          }
        }
        e('__tcfapi', '__tcfapiBuffer', '__tcfapiCall', '__tcfapiReturn');
        a('__tcfapiLocator');
        (function (e) {
          var t = document.createElement('script');
          t.id = 'spcloader';
          t.type = 'text/javascript';
          t.async = true;
          t.src =
            'https://sdk.privacy-center.org/' +
            e +
            '/loader.js?target=' +
            document.location.hostname;
          t.charset = 'utf-8';
          var n = document.getElementsByTagName('script')[0];
          n.parentNode.insertBefore(t, n);
        })('758b10ac-a0a7-421d-b3a2-f77eaa2897e8');
      })();
      window.didomiConfig = {
        app: { apiKey: '758b10ac-a0a7-421d-b3a2-f77eaa2897e8' },
        notice: {
          type: 'optin',
          content: {
            deny: { fr: 'Continuer sans accepter' },
            dismiss: { fr: 'Accepter' },
            learnMore: { fr: 'Personnaliser' },
          },
        },
      };
    </script>
    <script>
      window.didomiOnReady = window.didomiOnReady || [];
      window.consentReady = new Promise((r) => window.didomiOnReady.push(r));
    </script>
    <script>
      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];

      const gptLoadingTimeStart = Date.now();
      const inIframe =
        !!(
          typeof window !== 'undefined' &&
          window.document &&
          window.document.createElement
        ) && window.self !== window.top;

      if (!inIframe) {
        window.googletag?.cmd.push(() => {
          // gptLoadingTimeStart is setup in _document.js with googletag script
          window.gptDurationLoadingTime = Date.now() - gptLoadingTimeStart;
        });
      }
    </script>
    <script
      async=""
      src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
    ></script>
    <script>
      var pubId = '01CE9HZCZVPW9QB522QNNS8MZQ';
      !(function (h, u, b, v, i, s, o, r) {
        function n(r) {
          var c = console.error;
          function o(n) {
            try {
              n(r);
            } catch (n) {
              c(n);
            }
          }
          c(r);
          var n = u[h].cmd;
          (u[h] = function (n, r, c) {
            o(c);
          }),
            (u[h].cmd = n);
          for (var i = 0; i < u[h].cmd.length; ++i) o(u[h].cmd[i]);
          u[h].cmd = { push: o };
        }
        (u[h] =
          u[h] ||
          function () {
            var n = arguments;
            u[h].cmd.push(function () {
              u[h].apply(null, n);
            });
          }),
          (u[h].cmd = u[h].cmd || []);
        var r = setTimeout(
          n.bind(null, new Error('Hubvisor loading timeout !')),
          s || 3e3
        );
        function c() {
          r && (clearTimeout(r), (r = 0));
        }
        var o = b.createElement(v);
        (o.async = !0),
          (o.src = 'https://cdn.hubvisor.io/wrapper/' + i + '/hubvisor.js'),
          b.head.appendChild(o),
          o.addEventListener('error', function () {
            c(), n(new Error('Hubvisor loading failed !'));
          }),
          u[h].cmd.push(function () {
            c();
          });
      })('Hubvisor', window, document, 'script', pubId);

      window.Hubvisor = window.Hubvisor || {};
      window.Hubvisor.cmd = window.Hubvisor.cmd || [];
    </script>
    <link rel="preconnect" href="https://api.leboncoin.fr" />
    <link rel="dns-prefetch" href="https://api.leboncoin.fr" />
    <link rel="preconnect" href="//tags.tiqcdn.com" />
    <link rel="dns-prefetch" href="//tags.tiqcdn.com" />
    <link rel="preconnect" href="https://auth.leboncoin.fr" />
    <link rel="dns-prefetch" href="https://auth.leboncoin.fr" />
    <link
      rel="preload"
      href="/_next/static/css/097e3432d48e392c.css"
      as="style"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="/_next/static/css/097e3432d48e392c.css"
      crossorigin="anonymous"
      data-n-g=""
    />
    <link
      rel="preload"
      href="/_next/static/css/706ea2c7edc640d6.css"
      as="style"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="/_next/static/css/706ea2c7edc640d6.css"
      crossorigin="anonymous"
      data-n-p=""
    />
    <link
      rel="preload"
      href="/_next/static/css/c4296715e2b6931b.css"
      as="style"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="/_next/static/css/c4296715e2b6931b.css"
      crossorigin="anonymous"
    />
    <noscript data-n-css=""></noscript>
    <script
      defer=""
      crossorigin="anonymous"
      nomodule=""
      src="/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"
    ></script>
    <script
      defer=""
      src="/_next/static/chunks/6524-9ff19c6b.js"
      crossorigin="anonymous"
    ></script>
    <script
      defer=""
      src="/_next/static/chunks/5233-a9653e39936a8929.js"
      crossorigin="anonymous"
    ></script>
    <script
      defer=""
      src="/_next/static/chunks/2585-485566862b3d8133.js"
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/webpack-43b49b3ff09053a9.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/framework-5d998c2c23f66180.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/main-f4858c4eb6febbb1.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/pages/_app-204310b379ac5c03.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/8418-283f858d05874321.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/8534-03493fd0ff4bd7b4.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/5675-3667e1573b1c63fd.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/2583-3ccdc994dc44e3f6.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/2368-918863d3c0fe3e7d.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/2927-65da922940137777.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/2175-89331a9921828a6c.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/7757-a81f15e0f9187f86.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/1033-d537b9fbd0c9457f.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/7714-879f66c5588ca1ac.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/6420-0fd88322e35c6a2b.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/8974-7a018481a1e36446.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/1648-df4c56d1ff4d68c3.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/6528-0d09a6c8be4ae6c1.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/2645-fea27deb6e39a7c4.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/2822-7a9fef493b4ca14a.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/4435-0110e35900238b1d.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/5453-40372384fa993c79.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/8478-3658b4e55ee09c8b.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/246-d17c641690c72462.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/4256-fd5ebc5947f475fa.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/9929-e221efaf9bf1fdc4.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/6494-859c8a76f5f53ba7.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/3531-4aca8833c6dbb7a8.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/8272-a6b8415b660cc1ce.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/93-0d29100cc73e318c.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/1835-9357165ad0dbd745.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/chunks/pages/SearchListing-8a2635f9b4268750.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/4w8lrJmrtLaV8r-BlWpcc/_buildManifest.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <script
      src="/_next/static/4w8lrJmrtLaV8r-BlWpcc/_ssgManifest.js"
      defer=""
      crossorigin="anonymous"
    ></script>
    <style
      data-styled="iWErGZ hzZlYB wZbHV hcLEqk dqqWCR ihLnBY dkGFcW jbzAQX cxeHWj bwKeRz gzoWJL jZteSf hksFkF eOamWc ctaDFV bFFgbQ koyaqx cyyTWg fLLpnM cxYuzu fKGgoF dbnPvT ggRpjx iEGrlM domALE bvYuKY kzgkzO crGigL gJOwzg koCUQI bDWFJH eGlOOe fDkeNf esyuYc brSStf krCuDX lnmwDN fabXAL dkqSPC indQrJ ivuIYO ypOgj dfMCIy kYmLlj cHVNUF cgqyzP jtDuGP kZINAN fkbFIK itLWuw hfrjnG dAkClY jtIGhA itFAwO fwhFyd hoCZjG etcxvx caKpkk iIgVqX fNcuQa jhQHww iJcRKo foIYBx jgmmlW dPjHmE htiYMX gSceTZ ksqpjr fwWggd hBbPgy YYeJm esJZvD ioSRaQ eFyLqN epfcVg gPvTLd etNdHk cxKKHq cUffLW gmjKhg dKYAvD lloMiG bwLPOb jzstHd bkobBM iRhVLF jDePUk BRikj kEitnJ fZJQlt dSSabh fsdqyn kOfYBU fpYgKP eEqqIc iZgvev hCjwwP dXqUtc klIOhy jMCCIi cULktl linXqW dXhEzv loPmwk ipFinx joxNRR dqOxLv dwMzGZ bdbsAz ioRWNd jxUpOA jkSJys cwfzBF kNrYOs jQDzAy hMQYzw JnrLn jBTClJ bNPoke bBIeQQ bFEmgM jBwYSf WrNOe iDxQmT fykVdR iMVbSV ddsRRe eJWKLc eXukpe fzSgLY ThpAG kMwhSo gtBqBD jzvAZY eNFJSp kQnZPa eoUOQm kXzIvn drkIoC ciWPmi bZWctB joVIZf gQVBgo hBKzgZ kElKnc caQnMG fjwXMk"
      data-styled-version="4.4.1"
    >
      /* sc-component-id: sc-bdVaJa */
      .cxeHWj{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:1.6rem;} @media screen and (min-width:971px){.cxeHWj{display:none;}}.bwKeRz{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;z-index:0;}.gzoWJL{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.jZteSf{position:absolute;left:0;right:0;}.hksFkF{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#e6ebef;width:97rem;height:25rem;margin:auto;}.eOamWc{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#e6ebef;width:76.8rem;height:9rem;margin:auto;}.ctaDFV{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#e6ebef;width:32rem;height:5rem;margin:auto;}.bFFgbQ{margin-top:0.8rem;} @media screen and (min-width:768px){.bFFgbQ{margin-top:1.6rem;}}.koyaqx{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;grid-gap:0.8rem;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:1.6rem;} @media screen and (min-width:480px){.koyaqx{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}}.cyyTWg{border-radius:0.4rem;padding-top:0.8rem;padding-right:1.6rem;padding-left:0.8rem;margin-bottom:1.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fef0e9;}.fLLpnM{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;display:none;} @media screen and (min-width:480px){.fLLpnM{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}.cxYuzu{padding-top:0.8rem;padding-bottom:1.6rem;padding-left:0.8rem;}.fKGgoF{margin-bottom:1.6rem;}.dbnPvT{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.ggRpjx{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.iEGrlM{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;grid-gap:0.4rem;}.domALE{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;grid-gap:0.8rem;margin-top:0.4rem;margin-bottom:0.4rem;}.bvYuKY{margin-top:0.8rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.kzgkzO{position:relative;margin-left:auto;display:inline-block;}.crGigL{position:relative;}.gJOwzg{width:100%;height:17rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;border-radius:0.8rem;border-width:0.1rem;border-style:solid;border-color:#e6ebef;}.koCUQI{background-color:#e6ebef;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:17rem;margin-right:1.6rem;width:12rem;} @media screen and (min-width:480px){.koCUQI{width:24rem;}}.eGlOOe{background-color:#e6ebef;border-radius:2.4rem;height:2.4rem;margin-bottom:0.8rem;width:13rem;} @media screen and (min-width:768px){.eGlOOe{width:18rem;}}.fDkeNf{background-color:#e6ebef;border-radius:2.4rem;height:2rem;margin-bottom:3.2rem;width:14.3rem;} @media screen and (min-width:480px){.fDkeNf{width:20rem;}} @media screen and (min-width:971px){.fDkeNf{width:33rem;}}.esyuYc{border-radius:2.4rem;background-color:#e6ebef;width:9rem;height:1.6rem;}.brSStf{margin-top:0;margin-bottom:0;margin-left:auto;margin-right:auto;max-width:106rem;}.krCuDX{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.lnmwDN{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.fabXAL{height:0;position:absolute;width:0%;}
      /* sc-component-id: src___StyledBox-sc-fochin-0 */
      .indQrJ{width:100%;height:100%;display:block;}.ivuIYO{width:100%;height:100%;fill:#ff6e14;color:#ff6e14;}.ypOgj{width:2rem;height:2rem;min-width:2rem;margin-right:0.8rem;fill:#fff;color:#fff;}.dfMCIy{width:2.4rem;height:2.4rem;min-width:2.4rem;}.kYmLlj{width:1.6rem;height:1.6rem;min-width:1.6rem;margin-left:1.6rem;margin-right:1.6rem;fill:#a8b4c0;color:#a8b4c0;}.cHVNUF{width:1.6rem;height:1.6rem;min-width:1.6rem;display:block;fill:#1a1a1a;color:#1a1a1a;}.cgqyzP{width:1.6rem;height:1.6rem;min-width:1.6rem;display:block;fill:#a8b4c0;color:#a8b4c0;}.jtDuGP{width:1.6rem;height:1.6rem;min-width:1.6rem;fill:#a8b4c0;color:#a8b4c0;}.kZINAN{width:1.6rem;height:1.6rem;min-width:1.6rem;fill:#1a1a1a;color:#1a1a1a;}.fkbFIK{width:100%;height:25%;min-width:1.6rem;}.itLWuw{width:100%;height:50%;min-width:1.6rem;}.hfrjnG{width:1.4rem;height:1.4rem;min-width:1.4rem;fill:#cad1d9;color:#cad1d9;}.dAkClY{width:2.4rem;height:2.4rem;min-width:2.4rem;fill:#a8b4c0;color:#a8b4c0;} .dAkClY:hover{fill:#8191a0;}.jtIGhA{width:1.6rem;height:1.6rem;min-width:1.6rem;fill:#4e9850;color:#4e9850;}.itFAwO{width:1.6rem;height:1.6rem;min-width:1.6rem;fill:#fff;color:#fff;}.fwhFyd{width:1.6rem;height:1.6rem;min-width:1.6rem;fill:#cad1d9;color:#cad1d9;}.hoCZjG{width:2rem;height:2rem;min-width:2rem;margin-right:0.8rem;}.etcxvx{width:1.2rem;height:1.2rem;min-width:1.2rem;margin-left:0.8rem;}.caKpkk{width:2.4rem;height:2.4rem;min-width:2.4rem;margin-right:0.8rem;fill:#fff;color:#fff;}.iIgVqX{width:2.4rem;height:2.4rem;min-width:2.4rem;fill:#fff;color:#fff;}
      /* sc-component-id: sc-fAjcbJ */
      .hBbPgy{position:relative;height:5rem;display:none;} @media (min-width:971px){.hBbPgy{display:block;}}
      /* sc-component-id: sc-caSCKo */
      .YYeJm{position:relative;height:inherit;}
      /* sc-component-id: sc-gisBJw */
      .esJZvD{height:100%;}
      /* sc-component-id: sc-kjoXOD */
      .ioSRaQ{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;} .ioSRaQ:hover [data-itemwrapper]::after{left:50%;right:50%;}
      /* sc-component-id: sc-cHGsZl */
      .eFyLqN{position:relative;font-size:1.4rem;} .eFyLqN::after{content:"";position:absolute;bottom:0;left:50%;right:50%;border-bottom:2px solid;border-bottom-color:#1a1a1a;-webkit-transition-property:left,right;transition-property:left,right;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;} .eFyLqN:hover::after{left:0 !important;right:0 !important;-webkit-transition-duration:.3s;transition-duration:.3s;}
      /* sc-component-id: sc-TOsTZ */
      .epfcVg{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 1.6rem;background:#fff;padding-left:0;} .epfcVg::before{content:attr(data-label);height:0;visibility:hidden;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;font-weight:600;} .epfcVg:focus-visible{outline-offset:-2px;}.gPvTLd{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 1.6rem;background:#fff;} .gPvTLd::before{content:attr(data-label);height:0;visibility:hidden;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;font-weight:600;} .gPvTLd:focus-visible{outline-offset:-2px;}.etNdHk{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 1.6rem;background:#fff;padding-right:0;} .etNdHk::before{content:attr(data-label);height:0;visibility:hidden;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;font-weight:600;} .etNdHk:focus-visible{outline-offset:-2px;}
      /* sc-component-id: sc-kgAjT */
      .cxKKHq{-webkit-flex:1;-ms-flex:1;flex:1;position:relative;background:#fff;z-index:1;} .cxKKHq::before{content:"•";font-weight:600;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);} .cxKKHq:last-child{display:none;}
      /* sc-component-id: sc-ksYbfQ */
      .iJcRKo{display:block;height:6rem;width:14rem;}
      /* sc-component-id: sc-gGBfsJ */
      .htiYMX{position:relative;height:2.4rem;} .htiYMX [data-notificationscount]{top:-0.5rem;right:-1.5rem;}
      /* sc-component-id: sc-tilXH */
      .ihLnBY{position:-webkit-sticky;position:sticky;z-index:1100;border-bottom:0px solid #e6ebef;-webkit-transition:border-bottom-color 220ms;transition:border-bottom-color 220ms;border-bottom-width:0.1rem;top:0;} .ihLnBY::before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background-color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:box-shadow 220ms;transition:box-shadow 220ms;} .ihLnBY::after{content:"";position:fixed;z-index:-1;top:0;right:0;bottom:0;left:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:rgba(0,0,0,0.5);opacity:0;-webkit-transition:opacity 220ms;transition:opacity 220ms;}
      /* sc-component-id: sc-hEsumM */
      .dkGFcW{max-width:1066px;margin:0 auto;padding:0 1.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-column-gap:0.8rem;column-gap:0.8rem;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;padding:0;max-width:100%;}
      /* sc-component-id: sc-ktHwxA */
      .dqqWCR{height:1px;margin-bottom:-1px;visibility:hidden;}
      /* sc-component-id: sc-cIShpX */
      .foIYBx{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:relative;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;grid-gap:0.8rem;padding-left:0.8rem;padding-right:0.8rem;display:none;} .foIYBx:focus-visible{outline-color:#1a1a1a;outline-style:solid;outline-width:0.2rem;border-radius:0.4rem;} .foIYBx:hover .sc-kafWEX{-webkit-transition:0.3s ease-out;transition:0.3s ease-out;opacity:1;width:100%;} @media screen and (min-width:971px){.foIYBx{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}.jgmmlW{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;grid-gap:0.4rem;padding-left:0.8rem;padding-right:0.8rem;display:none;margin-left:auto;} .jgmmlW:focus-visible{outline-color:#1a1a1a;outline-style:solid;outline-width:0.2rem;border-radius:0.4rem;} .jgmmlW:hover .sc-kafWEX{-webkit-transition:0.3s ease-out;transition:0.3s ease-out;opacity:1;width:100%;} @media screen and (min-width:971px){.jgmmlW{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}.dPjHmE{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;grid-gap:0.4rem;padding-left:0.8rem;padding-right:0.8rem;display:none;} .dPjHmE:focus-visible{outline-color:#1a1a1a;outline-style:solid;outline-width:0.2rem;border-radius:0.4rem;} .dPjHmE:hover .sc-kafWEX{-webkit-transition:0.3s ease-out;transition:0.3s ease-out;opacity:1;width:100%;} @media screen and (min-width:971px){.dPjHmE{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}
      /* sc-component-id: sc-kafWEX */
      .gSceTZ{display:block;position:absolute;bottom:0;width:100%;height:0.3rem;opacity:1;background-color:#ff6e14;-webkit-transition:0.3s ease-out;transition:0.3s ease-out;}.ksqpjr{display:block;position:absolute;bottom:0;width:0rem;height:0.3rem;opacity:0;background-color:#ff6e14;}
      /* sc-component-id: sc-iELTvK */
      .wZbHV{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:4.4rem;-webkit-text-decoration:underline;text-decoration:underline;font-weight:600;border-radius:0.8rem;padding:0 0.8rem;} .wZbHV:focus-visible{outline-color:#1a1a1a;outline-offset:0.2rem;outline-style:solid;outline-width:0.2rem;} .wZbHV:focus,.wZbHV:hover{-webkit-text-decoration:none;text-decoration:none;}.hcLEqk{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:4.4rem;-webkit-text-decoration:underline;text-decoration:underline;font-weight:600;border-radius:0.8rem;padding:0 0.8rem;display:none;} .hcLEqk:focus-visible{outline-color:#1a1a1a;outline-offset:0.2rem;outline-style:solid;outline-width:0.2rem;} .hcLEqk:focus,.hcLEqk:hover{-webkit-text-decoration:none;text-decoration:none;} @media screen and (min-width:971px){.hcLEqk{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}
      /* sc-component-id: sc-cmTdod */
      .iWErGZ{position:fixed;top:0;left:0;right:0;height:0;opacity:0;max-width:1066px;background-color:#fff;box-shadow:0 -1px 4px 0 rgba(26,26,26,0.08),0 4px 8px 0 rgba(26,26,26,0.12);border-bottom-left-radius:0.8rem;border-bottom-right-radius:0.8rem;padding:0.4rem;z-index:-1;margin:0 auto;} .iWErGZ:focus-within{z-index:1600;width:100%;height:auto;opacity:1;}
      /* sc-component-id: sc-jwKygS */
      .hzZlYB{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0.4rem 0.8rem;gap:1.6rem;}
      /* sc-component-id: sc-lhVmIH */
      .jbzAQX{width:100%;max-width:1066px;margin:0 auto;padding:0 1.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}
      /* sc-component-id: sc-bYSBpT */
      .fNcuQa{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:6rem;overflow:hidden;} @media(min-width:971px){.fNcuQa{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}}
      /* sc-component-id: sc-elJkPf */
      .jhQHww{margin-right:calc(3rem + 1.6rem);opacity:1;visibility:visible;} @media(min-width:971px){.jhQHww{margin-right:0;opacity:1;visibility:visible;-webkit-transform:none;-ms-transform:none;transform:none;-webkit-transition:none;transition:none;}}
      /* sc-component-id: sc-jtRfpW */
      .cUffLW{position:absolute;left:0;right:0;bottom:0;height:5rem;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:rgba(0,0,0,0.5);opacity:0;-webkit-transition:opacity 220ms;transition:opacity 220ms;}
      /* sc-component-id: sc-kIPQKe */
      .gmjKhg{-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;border-radius:0.4rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0.8rem;background-color:#ffeebf;}
      /* sc-component-id: sc-eXEjpC */
      .dKYAvD{font-weight:600;white-space:pre;}
      /* sc-component-id: sc-RefOD */
      .klIOhy{width:100%;max-width:1066px;margin:0 auto;}
      /* sc-component-id: sc-bwCtUz */
      .dSSabh{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;position:relative;max-width:100%;}
      /* sc-component-id: sc-hrWEMg */
      .fsdqyn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:3.2rem;border-radius:1.6rem;-webkit-transition:background-color 0.2s ease-in-out,border 0.2s ease-in-out;transition:background-color 0.2s ease-in-out,border 0.2s ease-in-out;max-width:100%;padding:0;padding-left:0.8rem;padding-right:0.8rem;text-align:left;border:1px solid;border-color:#cad1d9;cursor:pointer;font-size:1.4rem;background-color:#fff;color:#1a1a1a;} .fsdqyn:hover{background-color:#e6ebef;} .fsdqyn:focus:not(:focus-visible){outline:none;background-color:#e6ebef;border-color:#1a1a1a;} .fsdqyn:focus-visible{outline-color:#1a1a1a;outline-offset:2px;outline-style:solid;outline-width:2px;} .fsdqyn > .sc-gwVKww:last-child{margin-right:0.8rem;} .fsdqyn > .sc-hXRMBi:last-child{margin-right:0;}
      /* sc-component-id: sc-eTuwsz */
      .kOfYBU{font-size:0;}
      /* sc-component-id: sc-gwVKww */
      .fpYgKP{font-weight:normal;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-left:0.8rem;margin-right:0.8rem;}
      /* sc-component-id: sc-cbkKFq */
      .kMwhSo{padding:0.8rem;background:#f4f6f7;}
      /* sc-component-id: sc-krvtoX */
      .eoUOQm{display:block;border-bottom:0.1rem solid #cad1d9;margin:0.8rem 0;}
      /* sc-component-id: sc-fYiAbW */
      .gtBqBD{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0.8rem 0;}
      /* sc-component-id: sc-fOKMvo */
      .kQnZPa{list-style-type:none;padding:0;margin:0;padding-bottom:0.8rem;} .kQnZPa:not(:last-child){border-bottom:0.1rem solid #cad1d9;margin-bottom:0.4rem;}
      /* sc-component-id: sc-dUjcNx */
      .jzvAZY{-webkit-flex:0 1 50%;-ms-flex:0 1 50%;flex:0 1 50%;} .jzvAZY:first-child{margin-right:1.6rem;} @media (min-width:971px){.jzvAZY{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}
      /* sc-component-id: sc-gHboQg */
      .eNFJSp:first-child{border-bottom:0.1rem solid #cad1d9;margin-bottom:0.4rem;} @media (min-width:971px){.eNFJSp{-webkit-flex:0 1 50%;-ms-flex:0 1 50%;flex:0 1 50%;}.eNFJSp:first-child{margin-right:1.6rem;border-bottom:0;margin-bottom:0;}}
      /* sc-component-id: sc-fOICqy */
      .dkqSPC{width:3rem;padding:0.8rem 0;border-radius:0.4rem;position:relative;}
      /* sc-component-id: sc-jeCdPy */
      .fwWggd{-webkit-animation:ktEnzR 1.5s steps(2,start) infinite;animation:ktEnzR 1.5s steps(2,start) infinite;} .fwWggd:first-child{-webkit-animation-delay:-0.32s;animation-delay:-0.32s;} .fwWggd:nth-child(2){-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}
      /* sc-component-id: sc-bEjcJn */
      .gQVBgo{border-bottom:0.1rem solid #a8b4c0;border-top:0.1rem solid #a8b4c0;list-style-type:none;margin:2.4rem 0 0.8rem;padding:0.8rem;text-align:center;} .gQVBgo a,.gQVBgo a:hover,.gQVBgo a:focus{color:#fff;} .gQVBgo a:hover{-webkit-text-decoration:underline;text-decoration:underline;} .gQVBgo a:focus{outline:0;box-shadow:0 0 0 0.1rem #fff;border-radius:0.4rem;}
      /* sc-component-id: sc-ePZHVD */
      .hBKzgZ{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;white-space:pre;} .hBKzgZ:not(:first-child):not(:last-child)::after{content:'\00a0·\00a0';}.kElKnc{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;white-space:normal;} .kElKnc:not(:first-child):not(:last-child)::after{content:'\00a0·\00a0';}
      /* sc-component-id: sc-likbZx */
      .ciWPmi{list-style-type:none;margin:0 1.6rem 0 0;padding:0;width:100%;} .ciWPmi:last-child{margin-right:0;} .ciWPmi .section{margin:0;} .ciWPmi:not(:last-child) a,.ciWPmi:not(:last-child) a:hover,.ciWPmi:not(:last-child) a:focus{color:#fff;} .ciWPmi:not(:last-child) a:hover{-webkit-text-decoration:underline;text-decoration:underline;} .ciWPmi:not(:last-child) a:focus{outline:0;box-shadow:0 0 0 0.2rem #fff;border-radius:0.4rem;}
      /* sc-component-id: sc-eKZiaR */
      .bZWctB{font-size:1.4rem;font-weight:600;border-bottom:0.1rem solid #a8b4c0;margin-bottom:1.6rem;padding-bottom:0.4rem;text-transform:uppercase;}
      /* sc-component-id: sc-drMfKT */
      .joVIZf{margin-bottom:0.8rem;} .joVIZf:last-child{margin-bottom:2.4rem;}
      /* sc-component-id: sc-fgfRvd */
      .caQnMG{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:0.8rem;} .caQnMG a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;} .caQnMG a:focus{outline:0;box-shadow:0 0 0 0.2rem #fff;border-radius:0.8rem;}
      /* sc-component-id: sc-hIVACf */
      .fjwXMk{display:none;} @media (min-width:971px){.fjwXMk{display:block;margin-right:0.8rem;}}
      /* sc-component-id: sc-gpHHfC */
      .kXzIvn{background-color:#474747;color:#fff;padding:1.6rem 0.8rem;} @media (min-width:1024px){.kXzIvn{padding-bottom:2.4rem;padding-top:2.4rem;}}
      /* sc-component-id: sc-gVyKpa */
      .drkIoC{display:none;} @media (min-width:971px){.drkIoC{display:block;}}
      /* sc-component-id: sc-eXNvrr */
      .kEitnJ{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;white-space:nowrap;width:100%;}
      /* sc-component-id: sc-cpmKsF */
      .fZJQlt{display:inline-block;vertical-align:top;padding:0.8rem;padding-right:0;max-width:calc(100vw - 16rem);} @media (min-width:971px){.fZJQlt{display:none;}}
      /* sc-component-id: sc-jrIrqw */
      .eEqqIc{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;vertical-align:top;height:3.4rem;overflow:hidden;box-sizing:content-box;white-space:normal;padding:0.8rem;-webkit-flex:1;-ms-flex:1;flex:1;opacity:0;}
      /* sc-component-id: sc-hjRWVT */
      .iZgvev{white-space:nowrap;overflow:hidden;}
      /* sc-component-id: sc-iQtOjA */
      .hCjwwP{display:inline-block;position:absolute;right:0.8rem;} .hCjwwP:not(:last-child){padding-right:0.8rem;}
      /* sc-component-id: sc-cqpYsc */
      .lloMiG{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-bottom:1px solid;border-color:#e6ebef;} @media (min-width:971px){.lloMiG{display:none;}}
      /* sc-component-id: sc-hBbWxd */
      .bwLPOb{-webkit-flex:1;-ms-flex:1;flex:1;margin:1.6rem;background-color:#f4f6f7;border-radius:0.4rem;height:4rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:text;color:#1a1a1a;}
      /* sc-component-id: sc-drKuOJ */
      .jzstHd{background-color:#fff;border-radius:0.8rem;padding:1.6rem;box-shadow:0 -1px 4px 0 rgba(26,26,26,0.08),0 4px 8px 0 rgba(26,26,26,0.12);display:none;width:100%;max-width:93rem;margin:1.6rem auto;padding:1.6rem;border:0;outline:none;} @media (min-width:971px){.jzstHd{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}
      /* sc-component-id: sc-gRnDUn */
      .bkobBM{-webkit-flex:1;-ms-flex:1;flex:1;min-width:0;margin-right:0.8rem;height:4rem;}
      /* sc-component-id: sc-cmjSyW */
      .iRhVLF{border-radius:4px;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:background-color 300ms,color 300ms;transition:background-color 300ms,color 300ms;cursor:pointer;width:medium;height:medium;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;font-size:1.4rem;font-weight:600;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:4rem;font-family:'Open Sans',sans-serif,Arial;padding-left:1.6rem;padding-right:1.6rem;border:1px solid transparent;color:#fff;background-color:#4183d7;-webkit-flex:0 0 19.5rem;-ms-flex:0 0 19.5rem;flex:0 0 19.5rem;height:4rem;-webkit-transition:none;transition:none;} .iRhVLF:hover,.iRhVLF:focus{-webkit-text-decoration:none;text-decoration:none;} .iRhVLF:focus{color:#fff;} .iRhVLF:hover{color:#fff;background-color:#369;} .iRhVLF:active{background-color:#369;} .iRhVLF:disabled{border-color:transparent;color:#cad1d9;background-color:#f4f6f7;pointer-events:none;cursor:not-allowed;}
      /* sc-component-id: sc-sdtwF */
      .linXqW{font-size:1.6rem;font-weight:600;cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}
      /* sc-component-id: sc-iYUSvU */
      .dXqUtc{padding:0 0.8rem;} @media (min-width:971px){.dXqUtc{padding-top:1.6rem;}}
      /* sc-component-id: sc-cHSUfg */
      .jMCCIi{display:inline-block;padding:0;width:55%;vertical-align:top;} @media (max-width:768px){.jMCCIi{width:100%;}}
      /* sc-component-id: sc-cTjmhe */
      .jDePUk{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:calc(93rem + (0.8rem * 2));margin:0 auto;margin-bottom:1.6rem;} @media (max-width:calc(971px - 1px)){.jDePUk{border-bottom:1px solid #e6ebef;}}
      /* sc-component-id: sc-cugefK */
      .BRikj{min-width:0;-webkit-flex:1;-ms-flex:1;flex:1;}
      /* sc-component-id: sc-iNhVCk */
      .bdbsAz{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;height:100%;box-sizing:border-box;min-width:auto;min-height:auto;background-color:#cad1d9;} .bdbsAz img{display:initial;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%;object-fit:cover;object-position:center;}.ioRWNd{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;height:100%;box-sizing:border-box;background-color:#cad1d9;} .ioRWNd img{display:none;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%;object-fit:cover;object-position:center;}
      /* sc-component-id: sc-eAKXzc */
      .jxUpOA{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;bottom:0.8rem;right:0.8rem;min-width:2.4rem;max-width:calc(100% - 2.4rem);height:2.4rem;background-color:rgba(0,0,0,0.5);border-radius:calc(2.4rem / 2);font-size:1.2rem;padding-left:0.8rem;padding-right:0.8rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#fff;}
      /* sc-component-id: sc-dRFtgE */
      .jQDzAy{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:0.4rem;}
      /* sc-component-id: sc-gkFcWv */
      .jBwYSf{position:absolute;bottom:0;right:0;z-index:1500;}
      /* sc-component-id: sc-hUfwpO */
      .bFEmgM{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:4px;} .bFEmgM:focus{box-shadow:none;} .bFEmgM:focus-visible{box-shadow:0 0 0 2px #0060cc;}
      /* sc-component-id: sc-imABML */
      .hMQYzw{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fef0e9;border-radius:0.4rem;padding-left:0.8rem;padding-right:0.8rem;padding-top:0;padding-bottom:0;height:2rem;color:#1a1a1a;color:#1a1a1a;background-color:#fef0e9;}.JnrLn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-radius:0.4rem;padding-left:0.8rem;padding-right:0.8rem;padding-top:0;padding-bottom:0;height:2rem;border-style:solid;border-width:1px;border-color:#cad1d9;color:#cad1d9;margin-top:1.6rem;margin-bottom:1.6rem;color:#cad1d9;background-color:#fff;}.jBTClJ{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#ff6e14;border-radius:0.4rem;padding-left:0.8rem;padding-right:0.8rem;padding-top:0;padding-bottom:0;height:2rem;color:#fff;color:#fff;background-color:#ff6e14;}.bNPoke{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-radius:0.4rem;padding-left:0.8rem;padding-right:0.8rem;padding-top:0;padding-bottom:0;height:2rem;border-style:solid;border-width:1px;border-color:#1a1a1a;color:#1a1a1a;margin-left:0.8rem;color:#1a1a1a;background-color:#fff;}.bBIeQQ{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-radius:0.4rem;padding-left:0.8rem;padding-right:0.8rem;padding-top:0;padding-bottom:0;height:2rem;border-style:solid;border-width:1px;border-color:#ff6e14;color:#ff6e14;color:#ff6e14;background-color:#fff;}
      /* sc-component-id: sc-fEUNkw */
      .kNrYOs{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;word-break:break-word;overflow:hidden;text-overflow:ellipsis;font-weight:600;font-size:1.6rem;line-height:2.2rem;min-height:2.2rem;-webkit-transition:color 0.3s;transition:color 0.3s;margin-bottom:0.4rem;}
      /* sc-component-id: sc-jMMfwr */
      .dXhEzv{height:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;} .dXhEzv:hover .sc-fEUNkw{color:#ff6e14;}
      /* sc-component-id: sc-bIqbHp */
      .iMVbSV{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;padding-top:2.4rem;padding-bottom:2.4rem;}
      /* sc-component-id: sc-jxGEyO */
      .ddsRRe{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:0;}
      /* sc-component-id: sc-gacfCG */
      .eJWKLc{margin:0 0.4rem 0 0;padding:0;list-style-type:none;}
      /* sc-component-id: sc-dEfkYy */
      .eXukpe{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:4rem;height:4rem;0 0;padding:0;border-radius:0.8rem;background-color:#fff;font-family:Open Sans,sans-serif,Arial;font-size:1.4rem;font-weight:600;color:#1a1a1a;-webkit-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;} .eXukpe margin:0 function (props){return:(0,_core.get)(props.theme,path,fallback);} .eXukpe function parse(props){-webkit-var:shouldSort = false;-moz-var:shouldSort = false;-ms-var:shouldSort = false;var:shouldSort = false;-webkit-var:isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;-moz-var:isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;-ms-var:isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;var:isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;return:styles;} .eXukpe function parse(props) for (var key in props){if:(!config[key]) continue;-webkit-var:sx = config[key];-moz-var:sx = config[key];-ms-var:sx = config[key];var:sx = config[key];-webkit-var:raw = props[key];-moz-var:raw = props[key];-ms-var:raw = props[key];var:raw = props[key];-webkit-var:scale = get(props.theme,sx.scale,sx.defaults);-moz-var:scale = get(props.theme,sx.scale,sx.defaults);-ms-var:scale = get(props.theme,sx.scale,sx.defaults);var:scale = get(props.theme,sx.scale,sx.defaults);(0,_objectAssign["default"])(styles,sx(raw,scale,props));} .eXukpe function parse(props) for (var key in props) if (typeof raw === 'object'){cache.breakpoints:= !isCacheDisabled && cache.breakpoints || get(props.theme,'breakpoints',defaults.breakpoints);continue;} .eXukpe function parse(props) for (var key in props) if (typeof raw === 'object') if (Array.isArray(raw)){cache.media:= !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));styles:= merge(styles,parseResponsiveStyle(cache.media,sx,scale,raw,props));continue;} .eXukpe function parse(props) for (var key in props) if (typeof raw === 'object') if (raw !== null){styles:= merge(styles,parseResponsiveObject(cache.breakpoints,sx,scale,raw,props));shouldSort:= true;} .eXukpe function parse(props) if (shouldSort){styles:= sort(styles);} .eXukpe:last-of-type{margin-right:0;}.fzSgLY{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:4rem;height:4rem;0 0;padding:0;border-radius:0.8rem;background-color:#1a1a1a;font-family:Open Sans,sans-serif,Arial;font-size:1.4rem;font-weight:600;color:#fff;-webkit-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;cursor:pointer;} .fzSgLY margin:0 function (props){return:(0,_core.get)(props.theme,path,fallback);} .fzSgLY function parse(props){-webkit-var:shouldSort = false;-moz-var:shouldSort = false;-ms-var:shouldSort = false;var:shouldSort = false;-webkit-var:isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;-moz-var:isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;-ms-var:isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;var:isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;return:styles;} .fzSgLY function parse(props) for (var key in props){if:(!config[key]) continue;-webkit-var:sx = config[key];-moz-var:sx = config[key];-ms-var:sx = config[key];var:sx = config[key];-webkit-var:raw = props[key];-moz-var:raw = props[key];-ms-var:raw = props[key];var:raw = props[key];-webkit-var:scale = get(props.theme,sx.scale,sx.defaults);-moz-var:scale = get(props.theme,sx.scale,sx.defaults);-ms-var:scale = get(props.theme,sx.scale,sx.defaults);var:scale = get(props.theme,sx.scale,sx.defaults);(0,_objectAssign["default"])(styles,sx(raw,scale,props));} .fzSgLY function parse(props) for (var key in props) if (typeof raw === 'object'){cache.breakpoints:= !isCacheDisabled && cache.breakpoints || get(props.theme,'breakpoints',defaults.breakpoints);continue;} .fzSgLY function parse(props) for (var key in props) if (typeof raw === 'object') if (Array.isArray(raw)){cache.media:= !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));styles:= merge(styles,parseResponsiveStyle(cache.media,sx,scale,raw,props));continue;} .fzSgLY function parse(props) for (var key in props) if (typeof raw === 'object') if (raw !== null){styles:= merge(styles,parseResponsiveObject(cache.breakpoints,sx,scale,raw,props));shouldSort:= true;} .fzSgLY function parse(props) if (shouldSort){styles:= sort(styles);} .fzSgLY:last-of-type{margin-right:0;} .fzSgLY:hover,.fzSgLY:active{background-color:#1a1a1a;} .fzSgLY:focus{background-color:#1a1a1a;}.ThpAG{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:4rem;height:4rem;0 0;padding:0;border-radius:0.8rem;background-color:#fff;font-family:Open Sans,sans-serif,Arial;font-size:1.4rem;font-weight:600;color:#1a1a1a;-webkit-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;cursor:pointer;} .ThpAG margin:0 function (props){return:(0,_core.get)(props.theme,path,fallback);} .ThpAG function parse(props){-webkit-var:shouldSort = false;-moz-var:shouldSort = false;-ms-var:shouldSort = false;var:shouldSort = false;-webkit-var:isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;-moz-var:isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;-ms-var:isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;var:isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;return:styles;} .ThpAG function parse(props) for (var key in props){if:(!config[key]) continue;-webkit-var:sx = config[key];-moz-var:sx = config[key];-ms-var:sx = config[key];var:sx = config[key];-webkit-var:raw = props[key];-moz-var:raw = props[key];-ms-var:raw = props[key];var:raw = props[key];-webkit-var:scale = get(props.theme,sx.scale,sx.defaults);-moz-var:scale = get(props.theme,sx.scale,sx.defaults);-ms-var:scale = get(props.theme,sx.scale,sx.defaults);var:scale = get(props.theme,sx.scale,sx.defaults);(0,_objectAssign["default"])(styles,sx(raw,scale,props));} .ThpAG function parse(props) for (var key in props) if (typeof raw === 'object'){cache.breakpoints:= !isCacheDisabled && cache.breakpoints || get(props.theme,'breakpoints',defaults.breakpoints);continue;} .ThpAG function parse(props) for (var key in props) if (typeof raw === 'object') if (Array.isArray(raw)){cache.media:= !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));styles:= merge(styles,parseResponsiveStyle(cache.media,sx,scale,raw,props));continue;} .ThpAG function parse(props) for (var key in props) if (typeof raw === 'object') if (raw !== null){styles:= merge(styles,parseResponsiveObject(cache.breakpoints,sx,scale,raw,props));shouldSort:= true;} .ThpAG function parse(props) if (shouldSort){styles:= sort(styles);} .ThpAG:last-of-type{margin-right:0;} .ThpAG:hover,.ThpAG:active{background-color:#f4f6f7;} .ThpAG:focus{background-color:#e6ebef;}
      /* sc-component-id: sc-fjhmcy */
      .WrNOe{height:4rem;margin-top:1.6rem;padding-left:calc(50% - (23rem / 2));}
      /* sc-component-id: sc-hwcHae */
      .iDxQmT{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#4183d7;color:#fff;height:4rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;border-radius:2.4rem;width:23rem;padding:0 1.2rem;box-sizing:border-box;position:fixed;bottom:2.4rem;overflow:hidden;z-index:1100;white-space:nowrap;background-color:#ff6e14;} .iDxQmT svg{-webkit-animation:evDDBS 5s infinite;animation:evDDBS 5s infinite;} .iDxQmT svg{-webkit-animation-delay:0.2s;animation-delay:0.2s;-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;}
      /* sc-component-id: sc-erNlkL */
      @media (min-width:480px){.cULktl{width:20rem;}}
      /* sc-component-id: sc-bJHhxl */
      .dwMzGZ{position:relative;height:100%;}
      /* sc-component-id: sc-TuwoP */
      .dqOxLv{position:relative;width:12rem;} .dqOxLv:before{content:"";display:block;padding-top:0;} @media(min-width:480px){.dqOxLv{width:24rem;}.dqOxLv:before{content:"";display:block;padding-top:0;}}
      /* sc-component-id: sc-hAXbOi */
      .loPmwk{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;min-height:16rem;} .loPmwk:before{content:"";position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;pointer-events:none;border-radius:0.8rem;border-style:solid;border-width:0.1rem;border-color:#cad1d9;} .loPmwk .sc-cCVOAp{border-top-left-radius:0.8rem;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0.8rem;} @media(min-width:480px){.loPmwk{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;min-height:16rem;}.loPmwk .sc-cCVOAp{border-top-left-radius:0.8rem;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0.8rem;}}.ipFinx{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;min-height:16rem;} .ipFinx:before{content:"";position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;pointer-events:none;border-radius:0.8rem;border-style:solid;border-width:0.1rem;border-color:#ff6e14 !important;} .ipFinx .sc-cCVOAp{border-top-left-radius:0.8rem;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0.8rem;} @media(min-width:480px){.ipFinx{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;min-height:16rem;}.ipFinx .sc-cCVOAp{border-top-left-radius:0.8rem;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0.8rem;}}
      /* sc-component-id: sc-cCVOAp */
      .joxNRR{overflow:hidden;position:relative;z-index:0;}
      /* sc-component-id: sc-cfWELz */
      .jkSJys{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;left:0;top:0;padding:0.8rem;-webkit-align-items:'flex-start';-webkit-box-align:'flex-start';-ms-flex-align:'flex-start';align-items:'flex-start';-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;grid-gap:initial;} @media(min-width:480px){.jkSJys{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;grid-gap:initial;}}
      /* sc-component-id: sc-kAdXeD */
      .cwfzBF{position:relative;min-width:0;margin:1.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;min-height:16rem;} @media(min-width:480px){.cwfzBF{min-height:16rem;}}
    </style>
    <style data-styled="ktEnzR evDDBS" data-styled-version="4.4.1">
      /* sc-component-id: sc-keyframes-ktEnzR */
      @-webkit-keyframes ktEnzR {
        to {
          visibility: hidden;
        }
      }
      @keyframes ktEnzR {
        to {
          visibility: hidden;
        }
      }
      /* sc-component-id: sc-keyframes-evDDBS */
      @-webkit-keyframes evDDBS {
        0% {
          -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
          transform: rotate(0);
        }
        2% {
          -webkit-transform: rotate(10deg);
          -ms-transform: rotate(10deg);
          transform: rotate(10deg);
        }
        4% {
          -webkit-transform: rotate(-10deg);
          -ms-transform: rotate(-10deg);
          transform: rotate(-10deg);
        }
        6% {
          -webkit-transform: rotate(8deg);
          -ms-transform: rotate(8deg);
          transform: rotate(8deg);
        }
        8% {
          -webkit-transform: rotate(-8deg);
          -ms-transform: rotate(-8deg);
          transform: rotate(-8deg);
        }
        10% {
          -webkit-transform: rotate(4deg);
          -ms-transform: rotate(4deg);
          transform: rotate(4deg);
        }
        12% {
          -webkit-transform: rotate(-4deg);
          -ms-transform: rotate(-4deg);
          transform: rotate(-4deg);
        }
        14% {
          -webkit-transform: rotate(2deg);
          -ms-transform: rotate(2deg);
          transform: rotate(2deg);
        }
        16% {
          -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
          transform: rotate(0);
        }
      }
      @keyframes evDDBS {
        0% {
          -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
          transform: rotate(0);
        }
        2% {
          -webkit-transform: rotate(10deg);
          -ms-transform: rotate(10deg);
          transform: rotate(10deg);
        }
        4% {
          -webkit-transform: rotate(-10deg);
          -ms-transform: rotate(-10deg);
          transform: rotate(-10deg);
        }
        6% {
          -webkit-transform: rotate(8deg);
          -ms-transform: rotate(8deg);
          transform: rotate(8deg);
        }
        8% {
          -webkit-transform: rotate(-8deg);
          -ms-transform: rotate(-8deg);
          transform: rotate(-8deg);
        }
        10% {
          -webkit-transform: rotate(4deg);
          -ms-transform: rotate(4deg);
          transform: rotate(4deg);
        }
        12% {
          -webkit-transform: rotate(-4deg);
          -ms-transform: rotate(-4deg);
          transform: rotate(-4deg);
        }
        14% {
          -webkit-transform: rotate(2deg);
          -ms-transform: rotate(2deg);
          transform: rotate(2deg);
        }
        16% {
          -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
          transform: rotate(0);
        }
      }
    </style>
  </head>
  <body>
    <script>
      !(function (a, b, c, d, e, f) {
        a.ddjskey = e;
        a.ddoptions = f || null;
        var m = b.createElement(c),
          n = b.getElementsByTagName(c)[0];
        (m.async = 1), (m.src = d), n.parentNode.insertBefore(m, n);
      })(
        window,
        document,
        'script',
        '//dd.leboncoin.fr/tags.js',
        '05B30BD9055986BD2EE8F5A199D973',
        {
          endpoint: '//dd.leboncoin.fr/js/',
          ajaxListenerPath: 'api.leboncoin.fr',
        }
      );
    </script>
    <div id="__next" data-reactroot="">
      <div id="container" class="" data-pagename="listing">
        <div class="apn-hbl apn-hb">
          <span
            aria-label="Encart publicitaire"
            id="hbl-m"
            class="teal-apn"
          ></span
          ><span
            aria-label="Encart publicitaire"
            id="hbl-l"
            class="teal-apn"
          ></span
          ><span
            aria-label="Encart publicitaire"
            id="hbl-xl"
            class="teal-apn"
          ></span>
        </div>
        <div class="_1gbif">
          <div class="_3b19Z _1LfpU">
            <div class="">
              <nav
                aria-label="Aller au contenu ou au footer"
                class="sc-cmTdod iWErGZ"
              >
                <ul class="sc-jwKygS hzZlYB">
                  <li>
                    <a href="#mainContent" class="sc-iELTvK wZbHV"
                      >aller au contenu</a
                    >
                  </li>
                  <li>
                    <a
                      href="#footer"
                      display="[object Object]"
                      class="sc-iELTvK hcLEqk"
                      >aller au footer</a
                    >
                  </li>
                </ul>
              </nav>
              <div class="sc-ktHwxA dqqWCR"></div>
              <header role="banner" class="sc-tilXH ihLnBY">
                <nav class="sc-hEsumM dkGFcW">
                  <div data-test-id="navbar" class="sc-lhVmIH jbzAQX">
                    <div display="[object Object]" class="sc-bdVaJa cxeHWj">
                      <nav role="navigation" aria-label="Menu principal">
                        <button aria-expanded="false" class="sc-fOICqy dkqSPC">
                          <svg
                            viewBox="0 0 20 14"
                            display="block"
                            role="img"
                            class="sc-bdVaJa src___StyledBox-sc-fochin-0 indQrJ"
                          >
                            <title>Ouvrir le menu principal</title>
                            <use xlink:href="#SvgBurgermenu"></use>
                          </svg>
                        </button>
                      </nav>
                    </div>
                    <div class="sc-bYSBpT fNcuQa">
                      <div class="sc-elJkPf jhQHww">
                        <a
                          title="Retour à la page d’accueil"
                          class="sc-ksYbfQ iJcRKo"
                          href="/"
                          ><svg
                            viewBox="0 0 230 45"
                            role="img"
                            class="sc-bdVaJa src___StyledBox-sc-fochin-0 ivuIYO"
                          >
                            <title>Logo leboncoin</title>
                            <use xlink:href="#SvgLeboncoinlogo"></use></svg
                        ></a>
                      </div>
                    </div>
                    <a
                      class="_2qvLx _3WXWV _2LZ_j _1Vw3w _23jKN _2hbpZ SWpW9 _30glL _1t_6z _1IbHJ _1y_ge _3QJkO"
                      href="/deposer-une-annonce"
                      ><svg
                        viewBox="0 0 24 24"
                        role="img"
                        class="sc-bdVaJa src___StyledBox-sc-fochin-0 ypOgj"
                      >
                        <use xlink:href="#SvgNewadoutline"></use></svg
                      >Déposer une annonce</a
                    ><a
                      aria-label="Rechercher"
                      aria-current="page"
                      display="[object Object]"
                      class="sc-cIShpX foIYBx"
                      href="/annonces/offres"
                      ><div height="2.4rem" class="sc-bdVaJa sc-gGBfsJ htiYMX">
                        <svg
                          viewBox="0 0 24 24"
                          data-test-id="icon"
                          role="img"
                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dfMCIy"
                        >
                          <use xlink:href="#SvgSearch"></use>
                        </svg>
                      </div>
                      <span class="_137P- _35DXM P4PEa">Rechercher</span>
                      <div class="sc-kafWEX gSceTZ"></div></a
                    ><a
                      aria-label="Mes recherches"
                      aria-current="false"
                      display="[object Object]"
                      marginLeft="auto"
                      flexDirection="column"
                      class="sc-cIShpX jgmmlW"
                      href="/mes-recherches"
                      ><div height="2.4rem" class="sc-bdVaJa sc-gGBfsJ htiYMX">
                        <svg
                          viewBox="0 0 24 24"
                          data-test-id="icon"
                          role="img"
                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dfMCIy"
                        >
                          <use xlink:href="#SvgNotificationoutline"></use>
                        </svg>
                      </div>
                      <span class="Dqdzf _3j0OU cJtdT">Mes recherches</span>
                      <div class="sc-kafWEX ksqpjr"></div></a
                    ><a
                      aria-label="Favoris"
                      aria-current="false"
                      display="[object Object]"
                      flexDirection="column"
                      class="sc-cIShpX dPjHmE"
                      href="/mes-annonces"
                      ><div height="2.4rem" class="sc-bdVaJa sc-gGBfsJ htiYMX">
                        <svg
                          viewBox="0 0 24 24"
                          data-test-id="icon"
                          role="img"
                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dfMCIy"
                        >
                          <use xlink:href="#SvgHeartoutline"></use>
                        </svg>
                      </div>
                      <span class="Dqdzf _3j0OU cJtdT">Favoris</span>
                      <div class="sc-kafWEX ksqpjr"></div></a
                    ><a
                      href="/messages"
                      aria-label="Messages"
                      aria-current="false"
                      display="[object Object]"
                      flexDirection="column"
                      class="sc-cIShpX dPjHmE"
                      ><div height="2.4rem" class="sc-bdVaJa sc-gGBfsJ htiYMX">
                        <svg
                          viewBox="0 0 24 24"
                          data-test-id="icon"
                          role="img"
                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dfMCIy"
                        >
                          <use xlink:href="#SvgMessageoutline"></use>
                        </svg>
                      </div>
                      <span class="Dqdzf _3j0OU cJtdT">Messages</span>
                      <div class="sc-kafWEX ksqpjr"></div></a
                    ><button
                      type="button"
                      aria-label="Connexion en cours"
                      aria-current="false"
                      display="[object Object]"
                      class="sc-cIShpX dPjHmE"
                    >
                      <div height="2.4rem" class="sc-bdVaJa sc-gGBfsJ htiYMX">
                        <svg
                          viewBox="0 0 24 24"
                          data-test-id="icon"
                          role="img"
                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dfMCIy"
                        >
                          <use xlink:href="#SvgUseroutline"></use>
                        </svg>
                      </div>
                      <span class="Dqdzf _3j0OU cJtdT"
                        ><span class="sc-jeCdPy fwWggd">.</span
                        ><span class="sc-jeCdPy fwWggd">.</span
                        ><span class="sc-jeCdPy fwWggd">.</span></span
                      >
                      <div class="sc-kafWEX ksqpjr"></div>
                    </button>
                    <div class="sc-bdVaJa bwKeRz">
                      <div class="sc-fAjcbJ hBbPgy">
                        <div
                          data-test-id="bar-non-sticky"
                          class="sc-caSCKo YYeJm"
                        >
                          <div class="sc-gisBJw esJZvD">
                            <div class="sc-kjoXOD ioSRaQ">
                              <div
                                data-itemwrapper="true"
                                class="sc-cHGsZl eFyLqN"
                              >
                                <button
                                  data-label="Immobilier"
                                  class="sc-TOsTZ epfcVg"
                                >
                                  Immobilier
                                </button>
                              </div>
                              <span class="sc-kgAjT cxKKHq"></span>
                              <div
                                data-itemwrapper="true"
                                class="sc-cHGsZl eFyLqN"
                              >
                                <button
                                  data-label="Véhicules"
                                  class="sc-TOsTZ gPvTLd"
                                >
                                  Véhicules
                                </button>
                              </div>
                              <span class="sc-kgAjT cxKKHq"></span>
                              <div
                                data-itemwrapper="true"
                                class="sc-cHGsZl eFyLqN"
                              >
                                <button
                                  data-label="Vacances"
                                  class="sc-TOsTZ gPvTLd"
                                >
                                  Vacances
                                </button>
                              </div>
                              <span class="sc-kgAjT cxKKHq"></span>
                              <div
                                data-itemwrapper="true"
                                class="sc-cHGsZl eFyLqN"
                              >
                                <button
                                  data-label="Emploi"
                                  class="sc-TOsTZ gPvTLd"
                                >
                                  Emploi
                                </button>
                              </div>
                              <span class="sc-kgAjT cxKKHq"></span>
                              <div
                                data-itemwrapper="true"
                                class="sc-cHGsZl eFyLqN"
                              >
                                <button
                                  data-label="Mode"
                                  class="sc-TOsTZ gPvTLd"
                                >
                                  Mode
                                </button>
                              </div>
                              <span class="sc-kgAjT cxKKHq"></span>
                              <div
                                data-itemwrapper="true"
                                class="sc-cHGsZl eFyLqN"
                              >
                                <button
                                  data-label="Maison"
                                  class="sc-TOsTZ gPvTLd"
                                >
                                  Maison
                                </button>
                              </div>
                              <span class="sc-kgAjT cxKKHq"></span>
                              <div
                                data-itemwrapper="true"
                                class="sc-cHGsZl eFyLqN"
                              >
                                <button
                                  data-label="Multimédia"
                                  class="sc-TOsTZ gPvTLd"
                                >
                                  Multimédia
                                </button>
                              </div>
                              <span class="sc-kgAjT cxKKHq"></span>
                              <div
                                data-itemwrapper="true"
                                class="sc-cHGsZl eFyLqN"
                              >
                                <button
                                  data-label="Loisirs"
                                  class="sc-TOsTZ gPvTLd"
                                >
                                  Loisirs
                                </button>
                              </div>
                              <span class="sc-kgAjT cxKKHq"></span>
                              <div
                                data-itemwrapper="true"
                                class="sc-cHGsZl eFyLqN"
                              >
                                <button
                                  data-label="Matériel Professionnel"
                                  class="sc-TOsTZ gPvTLd"
                                >
                                  Matériel Professionnel
                                </button>
                              </div>
                              <span class="sc-kgAjT cxKKHq"></span>
                              <div
                                data-itemwrapper="true"
                                class="sc-cHGsZl eFyLqN"
                              >
                                <button
                                  data-label="Autres"
                                  class="sc-TOsTZ etNdHk"
                                >
                                  Autres
                                </button>
                              </div>
                              <span class="sc-kgAjT cxKKHq"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-test-id="search-overlay"
                    class="sc-jtRfpW cUffLW"
                  ></div>
                </nav>
              </header>
              <noscript data-test-id="noscript"
                ><div class="styles_centered__2qP8T">
                  <div class="sc-kIPQKe gmjKhg">
                    <span class="sc-eXEjpC dKYAvD">Attention : </span>
                    <div>
                      Activez JavaScript pour profiter de toutes les
                      fonctionnalités de leboncoin
                    </div>
                  </div>
                </div></noscript
              >
              <main id="mainContent">
                <div class="apn-hbl apn-hb">
                  <span
                    aria-label="Encart publicitaire"
                    id="hbl-s"
                    class="teal-apn"
                  ></span>
                </div>
                <div data-test-id="search-form-mobile" class="sc-cqpYsc lloMiG">
                  <button role="button" class="sc-hBbWxd bwLPOb">
                    <svg
                      viewBox="0 0 24 24"
                      role="img"
                      class="sc-bdVaJa src___StyledBox-sc-fochin-0 kYmLlj"
                    >
                      <use xlink:href="#SvgSearch"></use></svg
                    >iphone 14
                  </button>
                </div>
                <div
                  data-test-id="search-form-desktop"
                  class="sc-eLExRp sc-drKuOJ jzstHd"
                >
                  <div class="sc-gRnDUn bkobBM">
                    <div class="_3id11">
                      <div class="Q9ISj"></div>
                      <div class="_1o09v">
                        <div class="">
                          <div class="_2XBIN">
                            <div class="_1SYCK">
                              <div class="PW1Kk">
                                <div
                                  role="button"
                                  aria-label="categories-cta"
                                  class="_1F6lq _7p8n5 FPAwQ _3Dgjm _2Pldh _3bsbL _3W949 _2vjeU"
                                  data-qa-id="cta-categories-desktop"
                                >
                                  <div class="_24Hzw">
                                    <div class="si3xQ">
                                      <svg
                                        viewBox="0 0 24 24"
                                        display="block"
                                        role="img"
                                        class="sc-bdVaJa src___StyledBox-sc-fochin-0 cHVNUF"
                                      >
                                        <use xlink:href="#SvgListing"></use>
                                      </svg>
                                    </div>
                                    <span
                                      class="_4Cl6k"
                                      data-qa-id="text-categories-desktop"
                                      >Catégories</span
                                    >
                                    <div class="EHZ3b">
                                      <svg
                                        viewBox="0 0 24 24"
                                        display="block"
                                        role="img"
                                        class="sc-bdVaJa src___StyledBox-sc-fochin-0 cgqyzP"
                                      >
                                        <use xlink:href="#SvgChevrondown"></use>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="_1JWLq">
                                <div class="_3YDIi">
                                  <div class="">
                                    <div
                                      class="ZlsP9 _27ngl _1mwQl aj3_W FB92D"
                                    >
                                      <span class="_1p6Mu"
                                        ><svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtDuGP"
                                        >
                                          <use
                                            xlink:href="#SvgSearch"
                                          ></use></svg></span
                                      ><input
                                        type="text"
                                        autocomplete="search-keyword-suggestions"
                                        maxlength="500"
                                        placeholder="Que recherchez-vous ?"
                                        class=""
                                        data-qa-id="input-keywords-desktop"
                                        value="iphone 14"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="_3a68i">
                                <div class="_2wu9v">
                                  <div class="_1xgM4">
                                    <div>
                                      <div class="_3Hrjq">
                                        <div
                                          class="ZlsP9 _27ngl _1mwQl aj3_W FB92D"
                                        >
                                          <span class="_1p6Mu"
                                            ><svg
                                              viewBox="0 0 18 24"
                                              role="img"
                                              class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtDuGP"
                                            >
                                              <use
                                                xlink:href="#SvgMarkeroutline"
                                              ></use></svg></span
                                          ><input
                                            type="text"
                                            autocomplete="search-location-suggestions"
                                            placeholder="Saisissez une ville et un rayon"
                                            class=""
                                            data-qa-id="input-locations-desktop"
                                            value=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="fV8kz"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    display="inline-flex"
                    font-size="body"
                    font-weight="semibold"
                    font-family="&#x27;Open Sans&#x27;, sans-serif, Arial"
                    type="button"
                    class="sc-eilVRo sc-eerKOB sc-cmjSyW iRhVLF"
                  >
                    Rechercher<!-- -->
                    (9 465)
                  </button>
                </div>
                <div class="sc-cTjmhe jDePUk">
                  <div class="sc-cugefK BRikj">
                    <div
                      display="flex"
                      tabindex="-1"
                      data-test-id="chips-wrapper"
                      class="sc-bdVaJa gzoWJL"
                    >
                      <div class="_13omV _1bDxG">
                        <div class="_3mtHQ" style="max-height: auto">
                          <div class="sc-eXNvrr kEitnJ">
                            <div class="sc-cpmKsF fZJQlt">
                              <div class="sc-bwCtUz dSSabh">
                                <button type="button" class="sc-hrWEMg fsdqyn">
                                  <span class="sc-eTuwsz kOfYBU"
                                    ><svg
                                      viewBox="0 0 24 24"
                                      role="img"
                                      class="sc-bdVaJa src___StyledBox-sc-fochin-0 kZINAN"
                                    >
                                      <use
                                        xlink:href="#SvgMarker"
                                      ></use></svg></span
                                  ><span class="sc-gwVKww fpYgKP"
                                    >Toute la France</span
                                  >
                                </button>
                              </div>
                            </div>
                            <div class="sc-jrIrqw eEqqIc">
                              <div class="sc-hjRWVT iZgvev">
                                <span
                                  title="Afficher tous les filtres"
                                  class="sc-iybRtq sc-iQtOjA hCjwwP"
                                  ><div class="sc-bwCtUz dSSabh">
                                    <button
                                      type="button"
                                      class="sc-hrWEMg fsdqyn"
                                    >
                                      <span class="sc-gwVKww fpYgKP"
                                        >Tous les filtres</span
                                      >
                                    </button>
                                  </div></span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="SdTtA"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sc-iYUSvU dXqUtc">
                  <div class="sc-RefOD klIOhy">
                    <div id="lht-space-ad">
                      <div
                        data-test-id="lht-placeholder"
                        class="sc-bdVaJa jZteSf"
                      >
                        <div class="_6UM0J">
                          <div
                            display="flex"
                            width="97rem"
                            height="25rem"
                            class="sc-bdVaJa hksFkF"
                          >
                            <svg
                              viewBox="0 0 142 42"
                              width="100%"
                              height="25%"
                              role="img"
                              class="sc-bdVaJa src___StyledBox-sc-fochin-0 fkbFIK"
                            >
                              <use
                                xlink:href="#SvgLeboncoinadvertisinglogo"
                              ></use>
                            </svg>
                          </div>
                        </div>
                        <div class="_2KqHw y7uUX">
                          <div
                            display="flex"
                            width="76.8rem"
                            height="9rem"
                            class="sc-bdVaJa eOamWc"
                          >
                            <svg
                              viewBox="0 0 142 42"
                              width="100%"
                              height="50%"
                              role="img"
                              class="sc-bdVaJa src___StyledBox-sc-fochin-0 itLWuw"
                            >
                              <use
                                xlink:href="#SvgLeboncoinadvertisinglogo"
                              ></use>
                            </svg>
                          </div>
                        </div>
                        <div class="_9dEbO">
                          <div
                            display="flex"
                            width="32rem"
                            height="5rem"
                            class="sc-bdVaJa ctaDFV"
                          >
                            <svg
                              viewBox="0 0 142 42"
                              width="100%"
                              height="50%"
                              role="img"
                              class="sc-bdVaJa src___StyledBox-sc-fochin-0 itLWuw"
                            >
                              <use
                                xlink:href="#SvgLeboncoinadvertisinglogo"
                              ></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="apn-mb">
                        <span
                          aria-label="Encart publicitaire"
                          id="lht-s"
                          class="teal-apn"
                        ></span
                        ><span
                          aria-label="Encart publicitaire"
                          id="lht-m"
                          class="teal-apn"
                        ></span
                        ><span
                          aria-label="Encart publicitaire"
                          id="lht-l"
                          class="teal-apn"
                        ></span
                        ><span
                          aria-label="Encart publicitaire"
                          id="lht-xl"
                          class="teal-apn"
                        ></span>
                      </div>
                    </div>
                    <div class="apn-lt" style="display: none">
                      <span
                        aria-label="Encart publicitaire"
                        id="lt-s"
                        class="teal-apn"
                      ></span
                      ><span
                        aria-label="Encart publicitaire"
                        id="lt-m"
                        class="teal-apn"
                      ></span>
                    </div>
                    <div class="sc-bdVaJa bFFgbQ">
                      <div class="sc-cHSUfg jMCCIi">
                        <h1 class="_3c6yv _2QVPN _3zIi4 _35DXM _2-a8M _1JYGK">
                          Annonces « iphone 14 » : Toute la France
                        </h1>
                      </div>
                      <div
                        class="apn-lt styles_AdvertisingLinkDesktop__tsgI3"
                        style="display: none"
                      >
                        <span
                          aria-label="Encart publicitaire"
                          id="lt-l"
                          class="teal-apn"
                        ></span
                        ><span
                          aria-label="Encart publicitaire"
                          id="lt-xl"
                          class="teal-apn"
                        ></span>
                      </div>
                    </div>
                    <div display="flex" class="sc-bdVaJa koyaqx">
                      <div class="sc-erNlkL cULktl">
                        <div class="">
                          <div class="_1Gifm">
                            <div class="_2BDI7">
                              <svg
                                viewBox="0 0 24 24"
                                role="img"
                                class="sc-bdVaJa src___StyledBox-sc-fochin-0 hfrjnG"
                              >
                                <use xlink:href="#SvgChevrondown"></use>
                              </svg>
                            </div>
                            <div class="_2NL49">
                              <select>
                                <option value="time,desc">
                                  Tri : Plus récentes
                                </option>
                                <option value="time,asc">
                                  Tri : Plus anciennes
                                </option>
                                <option value="price,asc">
                                  Tri : Prix croissants
                                </option>
                                <option value="price,desc">
                                  Tri : Prix décroissants
                                </option>
                                <option selected="" value="relevance,desc">
                                  Tri : Pertinence
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      display="flex"
                      data-test-id="add-category-banner"
                      class="sc-bdVaJa cyyTWg"
                    >
                      <div display="[object Object]" class="sc-bdVaJa fLLpnM">
                        <span
                          style="
                            box-sizing: border-box;
                            display: inline-block;
                            overflow: hidden;
                            width: 124px;
                            height: 65px;
                            background: none;
                            opacity: 1;
                            border: 0;
                            margin: 0;
                            padding: 0;
                            position: relative;
                          "
                          ><img
                            alt=""
                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI0cHgiIGhlaWdodD0iNjVweCIgdmlld0JveD0iMCAwIDEyNCA2NSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5pbGx1c3RyYXRpb248L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgaWQ9InBhdGgtMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyNCIgaGVpZ2h0PSI2NSIgcng9IjQiPjwvcmVjdD4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0zIiBwb2ludHM9IjAgMCA3Ni4zMjUzMDk5IDAgNzYuMzI1MzA5OSA4NS41NDM2ODEyIDAgODUuNTQzNjgxMiI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkRlc2t0b3AtUldEIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRW5jYXJ0LXBvdXNzZXItdW5lLWNhdMOpZ29yaWUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MS4wMDAwMDAsIC0yMTguMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJiYW5uZXJfZGFyay0jMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzMuMDAwMDAwLCAyMDguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWxsdXN0cmF0aW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgMTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iYmciPjwvZz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNDIiIG1hc2s9InVybCgjbWFzay0yKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM4LjgwMiwxMTIuNzEwNTE3IEMzOS4xMTQsMTExLjc0NTUxNyA1Ny43NTEsNjEuMzg4NTE2OSA1OS41MTEsNTQuODUxNTE2OSBDNjEuMjcsNDguMzEzNTE2OSA1NC4wNzksNDUuMjc3NTE2OSA1NC4wNzksNDUuMjc3NTE2OSBDNTQuMDc5LDQ1LjI3NzUxNjkgNTQuODY0LDM3LjM1OTUxNjkgNDcuOTk1LDM0LjQyNjUxNjkgQzQ4LjM3MywyOC44NjM1MTY5IDQ0LjUwNCwyNi41NDY1MTY5IDQwLjU0LDI1LjYxOTUxNjkgQzQwLjcyOCwyNC4yNjQ1MTY5IDQzLjc3MSwxMy42MDM1MTY5IDQzLjM2OCwxMi41MTI1MTY5IEM0Mi4wNTMsOC45NDc1MTY5NSAzOC43MTMsOC43MTM1MTY5NSAzNi4yOTMsMTMuMDA5NTE2OSBDMzQuNjU5LDE1LjkxMDUxNjkgMjYuNTcxLDQwLjEyOTUxNjkgMjYuNTcxLDQwLjEyOTUxNjkgTDE5LjY1NSwzMS44NTI1MTY5IEw3LjEwNTQyNzM2ZS0xNSw4My44NzU1MTY5IiBpZD0iRmlsbC0xIiBmaWxsPSIjRDU4RDY1Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTA3LjczODgsNDkuMzg5MDE2OSBMMjAuNzAzOCw1Ni44NDIwMTY5IEMxOC42Mjg4LDU3LjAyMDAxNjkgMTYuODAyOCw1NS40ODIwMTY5IDE2LjYyNDgsNTMuNDA3MDE2OSBMMTMuMDQwOCwxMS41NDYwMTY5IEMxMi44NjI4LDkuNDcxMDE2OTUgMTQuNDAwOCw3LjY0NTAxNjk1IDE2LjQ3NTgsNy40NjcwMTY5NSBMMTAzLjUxMDgsMC4wMTQwMTY5NDg4IEMxMDUuNTg1OCwtMC4xNjM5ODMwNTEgMTA3LjQxMTgsMS4zNzQwMTY5NSAxMDcuNTg4OCwzLjQ0OTAxNjk1IEwxMTEuMTczOCw0NS4zMTAwMTY5IEMxMTEuMzUxOCw0Ny4zODUwMTY5IDEwOS44MTM4LDQ5LjIxMTAxNjkgMTA3LjczODgsNDkuMzg5MDE2OSIgaWQ9IkZpbGwtMyIgZmlsbD0iIzNDM0MzQyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtNSIgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxMDIuNDkwNSA0OC4xODA1MTY5IDI4LjIwOTUgNTQuNTQxNTE2OSAyNC4yNDk1IDguMjk2NTE2OTUgOTguNTMwNSAxLjkzNTUxNjk1Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjEuODQzNSw2MS4yNjEzMTY5IEMyNS4xMzg1LDUyLjQ3NDMxNjkgMjcuNjA5NSw0Ni45ODMzMTY5IDI3Ljg4NDUsMzkuNTY5MzE2OSIgaWQ9IkZpbGwtNyIgZmlsbD0iI0Q1OEQ2NSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3LjEzNjIsNTkuNDk2MTE2OSBDMTguODYxMiw1Ni4wNTcxMTY5IDIwLjY1MjIsNTIuNzI5MTE2OSAyMi4xNTYyLDQ5LjQ3MjExNjkgQzIzLjY2NDIsNDYuMjExMTE2OSAyNC44MTAyLDQyLjk3NzExNjkgMjUuMzQzMiwzOS40NzUxMTY5IEwyNS4zNDgyLDM5LjQ0NzExNjkgQzI1LjU2MDIsMzguMDUxMTE2OSAyNi44NjQyLDM3LjA5MzExNjkgMjguMjYwMiwzNy4zMDUxMTY5IEMyOS40NjcyLDM3LjQ5MDExNjkgMzAuMzQ4MiwzOC40OTMxMTY5IDMwLjQyNTIsMzkuNjY0MTE2OSBDMzAuNTU4Miw0MS42ODcxMTY5IDMwLjUyMTIsNDMuNzU0MTE2OSAzMC4zMjIyLDQ1LjgwMDExNjkgQzMwLjEyNTIsNDcuODQ2MTE2OSAyOS43NzMyLDQ5Ljg2MzExNjkgMjkuMzU0Miw1MS44MTYxMTY5IEMyOC41MDMyLDU1LjcyNzExNjkgMjcuNDU5Miw1OS4zOTgxMTY5IDI2LjU1MDIsNjMuMDI2MTE2OSBDMjUuODcyMiw2NS43MzcxMTY5IDIzLjEyNDIsNjcuMzg0MTE2OSAyMC40MTMyLDY2LjcwNTExNjkgQzE3LjcwMjIsNjYuMDI2MTE2OSAxNi4wNTUyLDYzLjI3OTExNjkgMTYuNzM0Miw2MC41NjgxMTY5IEMxNi44MjQyLDYwLjIxMDExNjkgMTYuOTUwMiw1OS44NzAxMTY5IDE3LjEwNzIsNTkuNTUyMTE2OSBMMTcuMTM2Miw1OS40OTYxMTY5IFoiIGlkPSJGaWxsLTkiIGZpbGw9IiNENThENjUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTExIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjM5LjExMyAxOS4wOTA1MTY5IDM5Ljc1OSAxOS42ODg1MTY5IDQzLjMxNiAxOS4zNTk1MTY5IDQzLjI4OCAxOC45OTE1MTY5Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTYuMDMwOCwyNy41MTg4MTY5IEwzMS4zOTQ4LDI5LjYyODgxNjkgQzMwLjc0MjgsMjkuNjg0ODE2OSAzMC4xNjM4LDI5LjE5NjgxNjkgMzAuMTA3OCwyOC41NDQ4MTY5IEwyOC42NjA4LDExLjY0NzgxNjkgQzI4LjYwNDgsMTAuOTk1ODE2OSAyOS4wOTI4LDEwLjQxNjgxNjkgMjkuNzQ0OCwxMC4zNjA4MTY5IEw1NC4zODA4LDguMjUwODE2OTUgQzU1LjAzMjgsOC4xOTQ4MTY5NSA1NS42MTE4LDguNjgyODE2OTUgNTUuNjY3OCw5LjMzNDgxNjk1IEw1Ny4xMTQ4LDI2LjIzMTgxNjkgQzU3LjE3MDgsMjYuODgzODE2OSA1Ni42ODI4LDI3LjQ2MjgxNjkgNTYuMDMwOCwyNy41MTg4MTY5IiBpZD0iRmlsbC0xMyIgZmlsbD0iI0NBRDFEOSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTk0LjIwMDksNi40NTgyMTY5NSBMNTguNzQ4OSw5LjQ5NDIxNjk1IEM1OC4zNDI5LDkuNTI5MjE2OTUgNTcuOTgxOSw5LjIyNTIxNjk1IDU3Ljk0NjksOC44MTgyMTY5NSBMNTcuOTM1OSw4LjY5MTIxNjk1IEM1Ny45MDA5LDguMjg0MjE2OTUgNTguMjA0OSw3LjkyMzIxNjk1IDU4LjYxMTksNy44ODgyMTY5NSBMOTQuMDYzOSw0Ljg1MjIxNjk1IEM5NC40Njk5LDQuODE4MjE2OTUgOTQuODMwOSw1LjEyMjIxNjk1IDk0Ljg2NTksNS41MjgyMTY5NSBMOTQuODc2OSw1LjY1NTIxNjk1IEM5NC45MTE5LDYuMDYyMjE2OTUgOTQuNjA3OSw2LjQyMzIxNjk1IDk0LjIwMDksNi40NTgyMTY5NSIgaWQ9IkZpbGwtMTUiIGZpbGw9IiNDQUQxRDkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05NC40OTE4LDkuODU0NzE2OTUgTDU5LjAzOTgsMTIuODkwNzE2OSBDNTguNjMzOCwxMi45MjU3MTY5IDU4LjI3MjgsMTIuNjIxNzE2OSA1OC4yMzc4LDEyLjIxNDcxNjkgTDU4LjIyNjgsMTIuMDg3NzE2OSBDNTguMTkxOCwxMS42ODA3MTY5IDU4LjQ5NTgsMTEuMzE5NzE2OSA1OC45MDI4LDExLjI4NDcxNjkgTDk0LjM1NDgsOC4yNDg3MTY5NSBDOTQuNzYwOCw4LjIxNDcxNjk1IDk1LjEyMTgsOC41MTg3MTY5NSA5NS4xNTY4LDguOTI0NzE2OTUgTDk1LjE2NzgsOS4wNTE3MTY5NSBDOTUuMjAyOCw5LjQ1ODcxNjk1IDk0Ljg5ODgsOS44MTk3MTY5NSA5NC40OTE4LDkuODU0NzE2OTUiIGlkPSJGaWxsLTE3IiBmaWxsPSIjQ0FEMUQ5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTQuNzgyNywxMy4yNTEyMTY5IEw1OS4zMzA3LDE2LjI4NzIxNjkgQzU4LjkyNDcsMTYuMzIyMjE2OSA1OC41NjM3LDE2LjAxODIxNjkgNTguNTI4NywxNS42MTEyMTY5IEw1OC41MTc3LDE1LjQ4NDIxNjkgQzU4LjQ4MjcsMTUuMDc3MjE2OSA1OC43ODY3LDE0LjcxNjIxNjkgNTkuMTkzNywxNC42ODEyMTY5IEw5NC42NDU3LDExLjY0NTIxNjkgQzk1LjA1MTcsMTEuNjExMjE2OSA5NS40MTI3LDExLjkxNTIxNjkgOTUuNDQ3NywxMi4zMjEyMTY5IEw5NS40NTg3LDEyLjQ0ODIxNjkgQzk1LjQ5MzcsMTIuODU1MjE2OSA5NS4xODk3LDEzLjIxNjIxNjkgOTQuNzgyNywxMy4yNTEyMTY5IiBpZD0iRmlsbC0xOSIgZmlsbD0iI0NBRDFEOSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTc0LjMyODYsMTkuODMzOTE2OSBMNjIuNTAxNiwyMC44NDY5MTY5IEM2MC45NjM2LDIwLjk3ODkxNjkgNTkuODEyNiwyMi4zNDQ5MTY5IDU5Ljk0NDYsMjMuODgyOTE2OSBMNTkuOTg1NiwyNC4zNjI5MTY5IEM2MC4xMTc2LDI1LjkwMDkxNjkgNjEuNDgzNiwyNy4wNTE5MTY5IDYzLjAyMTYsMjYuOTE5OTE2OSBMNzQuODQ4NiwyNS45MDY5MTY5IEM3Ni4zODY2LDI1Ljc3NTkxNjkgNzcuNTM3NiwyNC40MDk5MTY5IDc3LjQwNTYsMjIuODcwOTE2OSBMNzcuMzY0NiwyMi4zOTA5MTY5IEM3Ny4yMzI2LDIwLjg1MjkxNjkgNzUuODY2NiwxOS43MDE5MTY5IDc0LjMyODYsMTkuODMzOTE2OSIgaWQ9IkZpbGwtMjEiIGZpbGw9IiNDQUQxRDkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01Ny44NzU4LDQ5LjAzMzQxNjkgTDMzLjIzNDgsNTEuMTQzNDE2OSBDMzIuNTgzOCw1MS4xOTk0MTY5IDMyLjAwNTgsNTAuNzEyNDE2OSAzMS45NTA4LDUwLjA2MjQxNjkgTDMwLjUwMjgsMzMuMTU5NDE2OSBDMzAuNDQ2OCwzMi41MDk0MTY5IDMwLjkzMzgsMzEuOTMxNDE2OSAzMS41ODQ4LDMxLjg3NTQxNjkgTDU2LjIyNTgsMjkuNzY1NDE2OSBDNTYuODc2OCwyOS43MDk0MTY5IDU3LjQ1MzgsMzAuMTk2NDE2OSA1Ny41MDk4LDMwLjg0NzQxNjkgTDU4Ljk1NzgsNDcuNzQ5NDE2OSBDNTkuMDEyOCw0OC4zOTk0MTY5IDU4LjUyNjgsNDguOTc3NDE2OSA1Ny44NzU4LDQ5LjAzMzQxNjkiIGlkPSJGaWxsLTIzIiBmaWxsPSIjQ0FEMUQ5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTYuMDQzNCwyNy45NzMwMTY5IEw2MC41OTE0LDMxLjAwOTAxNjkgQzYwLjE4NTQsMzEuMDQ0MDE2OSA1OS44MjQ0LDMwLjc0MDAxNjkgNTkuNzg5NCwzMC4zMzMwMTY5IEw1OS43Nzg0LDMwLjIwNjAxNjkgQzU5Ljc0MzQsMjkuNzk5MDE2OSA2MC4wNDc0LDI5LjQzODAxNjkgNjAuNDU0NCwyOS40MDMwMTY5IEw5NS45MDY0LDI2LjM2NzAxNjkgQzk2LjMxMjQsMjYuMzMzMDE2OSA5Ni42NzM0LDI2LjYzNzAxNjkgOTYuNzA4NCwyNy4wNDMwMTY5IEw5Ni43MTk0LDI3LjE3MDAxNjkgQzk2Ljc1NDQsMjcuNTc3MDE2OSA5Ni40NTA0LDI3LjkzODAxNjkgOTYuMDQzNCwyNy45NzMwMTY5IiBpZD0iRmlsbC0yNSIgZmlsbD0iI0NBRDFEOSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTk2LjMzNDIsMzEuMzY5NTE2OSBMNjAuODgyMiwzNC40MDU1MTY5IEM2MC40NzYyLDM0LjQ0MDUxNjkgNjAuMTE1MiwzNC4xMzY1MTY5IDYwLjA4MDIsMzMuNzI5NTE2OSBMNjAuMDY5MiwzMy42MDI1MTY5IEM2MC4wMzQyLDMzLjE5NTUxNjkgNjAuMzM4MiwzMi44MzQ1MTY5IDYwLjc0NTIsMzIuNzk5NTE2OSBMOTYuMTk3MiwyOS43NjM1MTY5IEM5Ni42MDMyLDI5LjcyOTUxNjkgOTYuOTY0MiwzMC4wMzM1MTY5IDk2Ljk5OTIsMzAuNDM5NTE2OSBMOTcuMDEwMiwzMC41NjY1MTY5IEM5Ny4wNDUyLDMwLjk3MzUxNjkgOTYuNzQxMiwzMS4zMzQ1MTY5IDk2LjMzNDIsMzEuMzY5NTE2OSIgaWQ9IkZpbGwtMjciIGZpbGw9IiNDQUQxRDkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05Ni42MjUxLDM0Ljc2NjAxNjkgTDYxLjE3MzEsMzcuODAyMDE2OSBDNjAuNzY3MSwzNy44MzcwMTY5IDYwLjQwNjEsMzcuNTMzMDE2OSA2MC4zNzExLDM3LjEyNjAxNjkgTDYwLjM2MDEsMzYuOTk5MDE2OSBDNjAuMzI1MSwzNi41OTIwMTY5IDYwLjYyOTEsMzYuMjMxMDE2OSA2MS4wMzYxLDM2LjE5NjAxNjkgTDk2LjQ4ODEsMzMuMTYwMDE2OSBDOTYuODk0MSwzMy4xMjYwMTY5IDk3LjI1NTEsMzMuNDMwMDE2OSA5Ny4yOTAxLDMzLjgzNjAxNjkgTDk3LjMwMTEsMzMuOTYzMDE2OSBDOTcuMzM2MSwzNC4zNzAwMTY5IDk3LjAzMjEsMzQuNzMxMDE2OSA5Ni42MjUxLDM0Ljc2NjAxNjkiIGlkPSJGaWxsLTI5IiBmaWxsPSIjQ0FEMUQ5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzYuMTcxLDQxLjM0ODYxNjkgTDY0LjM0NCw0Mi4zNjE2MTY5IEM2Mi44MDYsNDIuNDkzNjE2OSA2MS42NTUsNDMuODU5NjE2OSA2MS43ODcsNDUuMzk3NjE2OSBMNjEuODI4LDQ1Ljg3NzYxNjkgQzYxLjk2LDQ3LjQxNTYxNjkgNjMuMzI2LDQ4LjU2NjYxNjkgNjQuODY0LDQ4LjQzNDYxNjkgTDc2LjY5MSw0Ny40MjE2MTY5IEM3OC4yMjksNDcuMjkwNjE2OSA3OS4zOCw0NS45MjQ2MTY5IDc5LjI0OCw0NC4zODU2MTY5IEw3OS4yMDcsNDMuOTA1NjE2OSBDNzkuMDc1LDQyLjM2NzYxNjkgNzcuNzA5LDQxLjIxNjYxNjkgNzYuMTcxLDQxLjM0ODYxNjkiIGlkPSJGaWxsLTMxIiBmaWxsPSIjQ0FEMUQ5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMzUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjYuNjIxMzkwLCAyNC4wODY2MzYpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay00IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwLTM0Ij48L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTc2LjMyNTYwOTksNzguODE2NjgxMiBDNzUuODUzNjA5OSw3Ny45MTg2ODEyIDQ3LjQyODYwOTksMjYuODk5NjgxMiA0My45ODA2MDk5LDIxLjA3MzY4MTIgQzQwLjUzMzYwOTksMTUuMjQ2NjgxMiAzNS4zNzk2MDk5LDE4LjU5MjY4MTIgMzUuMzc5NjA5OSwxOC41OTI2ODEyIEMzNS4zNzk2MDk5LDE4LjU5MjY4MTIgMzIuMzk4NjA5OSwxMy45NjQ2ODEyIDI1LjUwMTYwOTksMTYuODI5NjgxMiBDMjEuODUwNjA5OSwxMi43NDQ2ODEyIDE3LjU3ODYwOTksMTMuNzg1NjgxMiAxNC4xNzM2MDk5LDE1Ljg5ODY4MTIgTDE0LjA3OTYwOTksMTUuNzc2NjgxMiBDMTIuMzA3NjA5OSwxMy40NzE2ODEyIDEwLjU2NzYwOTksMTEuMTY3NjgxMiA4Ljk0MzYwOTg4LDguODQyNjgxMjMgQzguMTI5NjA5ODgsNy42Nzk2ODEyMyA3LjM2NjYwOTg4LDYuNTE0NjgxMjMgNi42NTM2MDk4OCw1LjM0OTY4MTIzIEw2LjE2MzYwOTg4LDQuNDg2NjgxMjMgQzUuOTk5NjA5ODgsNC4xOTc2ODEyMyA1LjgzMDYwOTg4LDMuOTA1NjgxMjMgNS43MTI2MDk4OCwzLjYzNzY4MTIzIEM1LjU4NzYwOTg4LDMuMzY3NjgxMjMgNS40MzM2MDk4OCwzLjA3NTY4MTIzIDUuMzI0NjA5ODgsMi44MTk2ODEyMyBDNS4yNDI2MDk4OCwyLjU4NDY4MTIzIDUuMTUyNjA5ODgsMi4zNDc2ODEyMyA1LjA1MzYwOTg4LDIuMTA3NjgxMjMgTDQuODI3NjA5ODgsMS41NTQ2ODEyMyBDNC40MDE2MDk4OCwwLjUxNDY4MTIzNCAzLjMwODYwOTg4LC0wLjE0MzMxODc2NiAyLjE0NjYwOTg4LDAuMDI2NjgxMjMzNiBDMC43NzU2MDk4ODMsMC4yMjY2ODEyMzQgLTAuMTczMzkwMTE3LDEuNDk4NjgxMjMgMC4wMjY2MDk4ODMzLDIuODY5NjgxMjMgQzAuMDk1NjA5ODgzMywzLjM0MDY4MTIzIDAuMTcyNjA5ODgzLDMuODE2NjgxMjMgMC4yNTc2MDk4ODMsNC4yOTI2ODEyMyBDMC4zNTU2MDk4ODMsNC43MzY2ODEyMyAwLjQ3NTYwOTg4Myw1LjEyNTY4MTIzIDAuNTg3NjA5ODgzLDUuNTQ2NjgxMjMgQzAuNjk2NjA5ODgzLDUuOTczNjgxMjMgMC44MzE2MDk4ODMsNi4zNDc2ODEyMyAwLjk2NDYwOTg4Myw2LjcyNjY4MTIzIEwxLjM2ODYwOTg4LDcuODY1NjgxMjMgQzEuOTM5NjA5ODgsOS4zMjc2ODEyMyAyLjU0OTYwOTg4LDEwLjc0NTY4MTIgMy4xOTA2MDk4OCwxMi4xMjA2ODEyIEM0LjQ2ODYwOTg4LDE0Ljg3MzY4MTIgNS44Mjc2MDk4OCwxNy41MzE2ODEyIDcuMTk3NjA5ODgsMjAuMTU5NjgxMiBMMTEuMzA0NjA5OSwyNy45NjQ2ODEyIEMxMi42NTQ2MDk5LDMwLjU0MzY4MTIgMTMuOTg3NjA5OSwzMy4xMTU2ODEyIDE1LjE3OTYwOTksMzUuNjQyNjgxMiBDMTUuMjc2NjA5OSwzNS44NDI2ODEyIDE1LjM5NTYwOTksMzYuMDUwNjgxMiAxNS41MjE2MDk5LDM2LjI1MDY4MTIgTDE1Ljc1MDYwOTksMzYuNzc3NjgxMiBDMTUuOTg0NjA5OSwzNy4zMTY2ODEyIDE1LjQwNzYwOTksMzcuNzgyNjgxMiAxNC45NTE2MDk5LDM3LjU2NTY4MTIgQzE0LjE3NjYwOTksMzYuNjIwNjgxMiAxMy40MDI2MDk5LDM1LjY4MDY4MTIgMTIuNjI3NjA5OSwzNC43MTk2ODEyIEMxMS40MjA2MDk5LDMzLjIyNzY4MTIgMTAuMjA3NjA5OSwzMS43MTY2ODEyIDguOTM2NjA5ODgsMzAuMjAyNjgxMiBDNy42Njc2MDk4OCwyOC42OTE2ODEyIDYuMzIyNjA5ODgsMjcuMTY4NjgxMiA0LjgwNzYwOTg4LDI1LjcyNDY4MTIgQzMuOTYxNjA5ODgsMjQuOTE3NjgxMiAyLjY0MDYwOTg4LDI0Ljc3MzY4MTIgMS42Mjg2MDk4OCwyNS40NDk2ODEyIEMwLjQ1NTYwOTg4MywyNi4yMzM2ODEyIDAuMTQwNjA5ODgzLDI3LjgxODY4MTIgMC45MjM2MDk4ODMsMjguOTkwNjgxMiBMMC45NzM2MDk4ODMsMjkuMDYzNjgxMiBDMi45MTE2MDk4OCwzMS45NjQ2ODEyIDQuNTMzNjA5ODgsMzUuMzk3NjgxMiA2LjI2MjYwOTg4LDM4LjgxNDY4MTIgQzcuNDE1NjA5ODgsNDEuMTMyNjgxMiA4LjYxMzYwOTg4LDQzLjQ2NTY4MTIgOS44MzU2MDk4OCw0NS43OTY2ODEyIEwyOS4yNDA2MDk5LDg1LjU0MzY4MTIgTDc2LjMyNTYwOTksNzguODE2NjgxMiBaIiBpZD0iRmlsbC0zMyIgZmlsbD0iI0Q1OEQ2NSIgbWFzaz0idXJsKCNtYXNrLTQpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTA1Ljc1MTIsNDYuMDUxMzE2OSBDMTA1LjcyMTIsNDUuOTgzMzE2OSAxMDQuOTkxMiw0NC4zNTYzMTY5IDEwMi41NzMyLDQyLjM0MDMxNjkgQzEwMi4yOTkyLDQyLjExMjMxNjkgMTAxLjg5MjIsNDIuMTQ5MzE2OSAxMDEuNjYzMiw0Mi40MjMzMTY5IEMxMDEuNDM1Miw0Mi42OTczMTY5IDEwMS40NzEyLDQzLjEwNDMxNjkgMTAxLjc0NjIsNDMuMzMzMzE2OSBDMTAzLjkwMzIsNDUuMTMyMzE2OSAxMDQuNTYyMiw0Ni41NTkzMTY5IDEwNC41NjcyLDQ2LjU3MDMxNjkgQzEwNC42NzMyLDQ2LjgxMjMxNjkgMTA0LjkxMDIsNDYuOTU3MzE2OSAxMDUuMTU5Miw0Ni45NTczMTY5IEMxMDUuMjQ2Miw0Ni45NTczMTY5IDEwNS4zMzQyLDQ2LjkzOTMxNjkgMTA1LjQxOTIsNDYuOTAyMzE2OSBDMTA1Ljc0NTIsNDYuNzU5MzE2OSAxMDUuODk0Miw0Ni4zNzgzMTY5IDEwNS43NTEyLDQ2LjA1MTMxNjkiIGlkPSJGaWxsLTM2IiBmaWxsPSIjOTY0MTBBIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTMuMzAwNiw0MC42NTgyMTY5IEM5My4wODE2LDQwLjM3NzIxNjkgOTIuNjc2Niw0MC4zMjMyMTY5IDkyLjM5MzYsNDAuNTQzMjE2OSBDOTIuMTExNiw0MC43NjEyMTY5IDkyLjA1OTYsNDEuMTY3MjE2OSA5Mi4yNzc2LDQxLjQ1MDIxNjkgQzk1LjcyMjYsNDUuODk2MjE2OSA5Ni41MTA2LDQ3LjcyOTIxNjkgOTYuNTE2Niw0Ny43NDQyMTY5IEM5Ni42MTk2LDQ3Ljk5NDIxNjkgOTYuODYwNiw0OC4xNDUyMTY5IDk3LjExNDYsNDguMTQ1MjE2OSBDOTcuMTk2Niw0OC4xNDUyMTY5IDk3LjI3OTYsNDguMTMwMjE2OSA5Ny4zNjA2LDQ4LjA5NzIxNjkgQzk3LjY5MDYsNDcuOTYxMjE2OSA5Ny44NDg2LDQ3LjU4NDIxNjkgOTcuNzEyNiw0Ny4yNTMyMTY5IEM5Ny42ODA2LDQ3LjE3NTIxNjkgOTYuODg2Niw0NS4yODgyMTY5IDkzLjMwMDYsNDAuNjU4MjE2OSIgaWQ9IkZpbGwtMzgiIGZpbGw9IiM5NjQxMEEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik04Mi4xNDYyLDM5LjkxNTUxNjkgQzgxLjkyNzIsMzkuNjM0NTE2OSA4MS41MjIyLDM5LjU4MDUxNjkgODEuMjM5MiwzOS44MDA1MTY5IEM4MC45NTcyLDQwLjAxODUxNjkgODAuOTA1Miw0MC40MjQ1MTY5IDgxLjEyMzIsNDAuNzA3NTE2OSBDODQuNjI2Miw0NS4yMjk1MTY5IDg4LjU4ODIsNTIuMjQxNTE2OSA4OC42MjgyLDUyLjMxMTUxNjkgQzg4Ljc0NzIsNTIuNTIyNTE2OSA4OC45NjYyLDUyLjY0MDUxNjkgODkuMTkyMiw1Mi42NDA1MTY5IEM4OS4yOTkyLDUyLjY0MDUxNjkgODkuNDA5Miw1Mi42MTM1MTY5IDg5LjUwOTIsNTIuNTU2NTE2OSBDODkuODIwMiw1Mi4zODE1MTY5IDg5LjkzMDIsNTEuOTg3NTE2OSA4OS43NTUyLDUxLjY3NjUxNjkgQzg5LjcxNTIsNTEuNjA1NTE2OSA4NS43MDcyLDQ0LjUxMzUxNjkgODIuMTQ2MiwzOS45MTU1MTY5IiBpZD0iRmlsbC00MCIgZmlsbD0iIzk2NDEwQSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
                            decoding="async"
                            data-nimg="fixed"
                            style="
                              position: absolute;
                              top: 0;
                              left: 0;
                              bottom: 0;
                              right: 0;
                              box-sizing: border-box;
                              padding: 0;
                              border: none;
                              margin: auto;
                              display: block;
                              width: 0;
                              height: 0;
                              min-width: 100%;
                              max-width: 100%;
                              min-height: 100%;
                              max-height: 100%;
                            "
                        /></span>
                      </div>
                      <div class="sc-bdVaJa cxYuzu">
                        <p class="_1pHkp _1hnil _3j0OU _1-TTU">
                          Résultats en
                          <span class="_1hnil _35DXM _1-TTU"
                            >Toutes catégories</span
                          >
                        </p>
                        <p class="sc-sdtwF linXqW">
                          Affiner en ajoutant une catégorie
                        </p>
                      </div>
                    </div>
                    <div class="styles_Listing__rqSnx">
                      <div class="styles_classifiedColumn__FvVg5">
                        <div class="sc-bdVaJa fKGgoF">
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2292560874.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk bdbsAz">
                                      <picture
                                        ><source
                                          srcset="
                                            https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=classified-760x460-avif
                                          "
                                          type="image/avif"
                                          media="(min-width: 1280px)" />
                                        <source
                                          srcset="
                                            https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=classified-760x460-webp
                                          "
                                          type="image/webp"
                                          media="(min-width: 1280px)" />
                                        <source
                                          srcset="
                                            https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=classified-760x460-jpg
                                          "
                                          type="image/jpeg"
                                          media="(min-width: 1280px)" />
                                        <source
                                          srcset="
                                            https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=classified-480x290-avif
                                          "
                                          type="image/avif"
                                          media="(min-width: 480px)" />
                                        <source
                                          srcset="
                                            https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=classified-480x290-webp
                                          "
                                          type="image/webp"
                                          media="(min-width: 480px)" />
                                        <source
                                          srcset="
                                            https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=classified-480x290-jpg
                                          "
                                          type="image/jpeg"
                                          media="(min-width: 480px)" />
                                        <source
                                          srcset="
                                            https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=classified-380x230-avif
                                          "
                                          type="image/avif" />
                                        <source
                                          srcset="
                                            https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=classified-380x230-webp
                                          "
                                          type="image/webp" />
                                        <source
                                          srcset="
                                            https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=classified-380x230-jpg
                                          "
                                          type="image/jpeg" />
                                        <img
                                          src="https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=ad-image"
                                          class="_1cnjm"
                                          alt=""
                                      /></picture>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        1
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 pro max trouver"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 pro max trouver
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Don (gratuit)."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span class="_3Ce01 _137P- _35DXM P4PEa"
                                          >Don (gratuit)</span
                                        >
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Sainte-Foy-lès-Lyon 69110."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Sainte-Foy-lès-Lyon 69110
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 18:01."
                                        title="09 février 2023 à 18h01"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 18:01
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2294773909.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        1
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 PRO"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 PRO
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 0 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >0<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Narbonne 11100."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Narbonne 11100
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : 02 fév, 21:05."
                                        title="02 février 2023 à 21h05"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        02 fév, 21:05
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2296047867.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        3
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 830 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_3TeyH _137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >830<!-- --> €
                                          </span></span
                                        ><svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtIGhA"
                                        >
                                          <title>Baisse de prix</title>
                                          <use xlink:href="#SvgFall"></use>
                                        </svg>
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Pontoise 95300."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Pontoise 95300
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : 05 fév, 12:47."
                                        title="05 février 2023 à 12h47"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        05 fév, 12:47
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div class="styles_ad__q8Vta" id="outlined">
                            <div class="styles_separator__gszvh"></div>
                            <div class="sc-bdVaJa crGigL apn-na">
                              <div
                                data-test-id="placeholder-native-outlined"
                                width="100%"
                                height="17rem"
                                display="flex"
                                overflow="hidden"
                                class="sc-bdVaJa gJOwzg"
                              >
                                <div class="_1XOrJ">
                                  <div display="flex" class="sc-bdVaJa gzoWJL">
                                    <div
                                      display="flex"
                                      width="[object Object]"
                                      height="17rem"
                                      class="sc-bdVaJa koCUQI"
                                    ></div>
                                    <div class="sc-bdVaJa bDWFJH">
                                      <div
                                        color="greyMedium"
                                        class="sc-imABML JnrLn"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Sponsorisé</span
                                        >
                                      </div>
                                      <div
                                        width="[object Object]"
                                        height="2.4rem"
                                        class="sc-bdVaJa eGlOOe"
                                      ></div>
                                      <div
                                        width="[object Object]"
                                        height="2rem"
                                        class="sc-bdVaJa fDkeNf"
                                      ></div>
                                      <div
                                        width="9rem"
                                        height="1.6rem"
                                        class="sc-bdVaJa esyuYc"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span
                                aria-label="Encart publicitaire"
                                id="na1-s"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-m"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-xl"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-criteo-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-criteo-l-outlined"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-criteo-xl"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-criteo-xl-outlined"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-afsh-s"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-afsh-m"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-afsh-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-afsh-xl"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-afs-s"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-afs-m"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-afs-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na1-afs-xl"
                                class="teal-apn native"
                              ></span>
                            </div>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2297869800.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        1
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 pro"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 pro
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 1 100 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >1 100<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Paris 75015 15e Arrondissement."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Paris 75015 15e Arrondissement
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Hier, 19:07."
                                        title="08 février 2023 à 19h07"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Hier, 19:07
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2277824702.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        1
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 neuf"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 neuf
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 849 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_3TeyH _137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >849<!-- --> €
                                          </span></span
                                        ><svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtIGhA"
                                        >
                                          <title>Baisse de prix</title>
                                          <use xlink:href="#SvgFall"></use>
                                        </svg>
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Les Pennes-Mirabeau 13170."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Les Pennes-Mirabeau 13170
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 18:06."
                                        title="09 février 2023 à 18h06"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 18:06
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2296847705.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        4
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 820 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >820<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Paris 75017 17e Arrondissement."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Paris 75017 17e Arrondissement
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : 06 fév, 18:15."
                                        title="06 février 2023 à 18h15"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        06 fév, 18:15
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_featured__OObFO"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2294522385.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi ipFinx"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        4
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      >
                                        <div
                                          color="white"
                                          class="sc-imABML jBTClJ"
                                        >
                                          <span class="Dqdzf _35DXM cJtdT"
                                            >À la une</span
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="IPhone 14 plus midnight 128 Go"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        IPhone 14 plus midnight 128 Go
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 950 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_3TeyH _137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >950<!-- --> €
                                          </span></span
                                        ><svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtIGhA"
                                        >
                                          <title>Baisse de prix</title>
                                          <use xlink:href="#SvgFall"></use>
                                        </svg>
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Dijon 21000 Maladière-Drapeau-Clemenceau."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Dijon 21000 Maladière-Drapeau-Clemenceau
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 12:48."
                                        title="09 février 2023 à 12h48"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 12:48
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div class="styles_ad__q8Vta" id="outlined">
                            <div class="styles_separator__gszvh"></div>
                            <div class="vl">
                              <div
                                aria-label="Encart publicitaire"
                                id="vl-s"
                                class="teal-apn"
                              ></div>
                              <div
                                aria-label="Encart publicitaire"
                                id="vl-m"
                                class="teal-apn"
                              ></div>
                              <div
                                aria-label="Encart publicitaire"
                                id="vl-l"
                                class="teal-apn"
                              ></div>
                              <div
                                aria-label="Encart publicitaire"
                                id="vl-xl"
                                class="teal-apn"
                              ></div>
                            </div>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2297363744.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        4
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 neuf 128gb"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 neuf 128gb
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 800 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >800<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Villeurbanne 69100."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Villeurbanne 69100
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : 07 fév, 18:41."
                                        title="07 février 2023 à 18h41"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        07 fév, 18:41
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2294903075.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        2
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 Rouge"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 Rouge
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 700 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >700<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Lyon 69007 7e Arrondissement."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Lyon 69007 7e Arrondissement
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : 03 fév, 10:03."
                                        title="03 février 2023 à 10h03"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        03 fév, 10:03
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2298338771.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        2
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 blanc neuf sous scellé"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 blanc neuf sous scellé
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 800 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >800<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Gennevilliers 92230."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Gennevilliers 92230
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 19:13."
                                        title="09 février 2023 à 19h13"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 19:13
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div class="styles_ad__q8Vta" id="outlined">
                            <div class="styles_separator__gszvh"></div>
                            <div class="sc-bdVaJa crGigL apn-na">
                              <div
                                data-test-id="placeholder-native-outlined"
                                width="100%"
                                height="17rem"
                                display="flex"
                                overflow="hidden"
                                class="sc-bdVaJa gJOwzg"
                              >
                                <div class="_1XOrJ">
                                  <div display="flex" class="sc-bdVaJa gzoWJL">
                                    <div
                                      display="flex"
                                      width="[object Object]"
                                      height="17rem"
                                      class="sc-bdVaJa koCUQI"
                                    ></div>
                                    <div class="sc-bdVaJa bDWFJH">
                                      <div
                                        color="greyMedium"
                                        class="sc-imABML JnrLn"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Sponsorisé</span
                                        >
                                      </div>
                                      <div
                                        width="[object Object]"
                                        height="2.4rem"
                                        class="sc-bdVaJa eGlOOe"
                                      ></div>
                                      <div
                                        width="[object Object]"
                                        height="2rem"
                                        class="sc-bdVaJa fDkeNf"
                                      ></div>
                                      <div
                                        width="9rem"
                                        height="1.6rem"
                                        class="sc-bdVaJa esyuYc"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span
                                aria-label="Encart publicitaire"
                                id="na2-s"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na2-m"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na2-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na2-xl"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na2-criteo-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na2-criteo-l-outlined"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na2-criteo-xl"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na2-criteo-xl-outlined"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na2-afsh-s"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na2-afsh-m"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na2-afsh-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na2-afsh-xl"
                                class="teal-apn native"
                              ></span>
                            </div>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2289866597.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        2
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 950 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >950<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Dreux 28100."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Dreux 28100
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 08:04."
                                        title="09 février 2023 à 08h04"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 08:04
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2297103030.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        3
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 noir 128gb"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 noir 128gb
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 750 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_3TeyH _137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >750<!-- --> €
                                          </span></span
                                        ><svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtIGhA"
                                        >
                                          <title>Baisse de prix</title>
                                          <use xlink:href="#SvgFall"></use>
                                        </svg>
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Bry-sur-Marne 94360."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Bry-sur-Marne 94360
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : 07 fév, 11:00."
                                        title="07 février 2023 à 11h00"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        07 fév, 11:00
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2284092161.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        3
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 950 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >950<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Montélimar 26200."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Montélimar 26200
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 11:14."
                                        title="09 février 2023 à 11h14"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 11:14
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_featured__OObFO"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2286561710.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi ipFinx"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        2
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      >
                                        <div
                                          color="white"
                                          class="sc-imABML jBTClJ"
                                        >
                                          <span class="Dqdzf _35DXM cJtdT"
                                            >À la une</span
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 pro"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 pro
                                      </p>
                                      <div
                                        color="black"
                                        class="sc-imABML bNPoke"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Pro</span
                                        >
                                      </div>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 1 299 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_3TeyH _137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >1 299<!-- --> €
                                          </span></span
                                        ><svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtIGhA"
                                        >
                                          <title>Baisse de prix</title>
                                          <use xlink:href="#SvgFall"></use>
                                        </svg>
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Sarreguemines 57200."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Sarreguemines 57200
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 14:57."
                                        title="09 février 2023 à 14h57"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 14:57
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2281811289.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        3
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 900 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >900<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Paris 75001."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Paris 75001
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 17:14."
                                        title="09 février 2023 à 17h14"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 17:14
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2297928945.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        3
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 128gb"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 128gb
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 870 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_3TeyH _137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >870<!-- --> €
                                          </span></span
                                        ><svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtIGhA"
                                        >
                                          <title>Baisse de prix</title>
                                          <use xlink:href="#SvgFall"></use>
                                        </svg>
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Strasbourg 67000."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Strasbourg 67000
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Hier, 21:23."
                                        title="08 février 2023 à 21h23"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Hier, 21:23
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div class="styles_ad__q8Vta" id="outlined">
                            <div class="styles_separator__gszvh"></div>
                            <div
                              class="sc-bdVaJa crGigL apn-autopromo_listing apn-na"
                            >
                              <div
                                data-test-id="placeholder-native-outlined"
                                width="100%"
                                height="17rem"
                                display="flex"
                                overflow="hidden"
                                class="sc-bdVaJa gJOwzg"
                              >
                                <div class="_1XOrJ">
                                  <div display="flex" class="sc-bdVaJa gzoWJL">
                                    <div
                                      display="flex"
                                      width="[object Object]"
                                      height="17rem"
                                      class="sc-bdVaJa koCUQI"
                                    ></div>
                                    <div class="sc-bdVaJa bDWFJH">
                                      <div
                                        color="greyMedium"
                                        class="sc-imABML JnrLn"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Sponsorisé</span
                                        >
                                      </div>
                                      <div
                                        width="[object Object]"
                                        height="2.4rem"
                                        class="sc-bdVaJa eGlOOe"
                                      ></div>
                                      <div
                                        width="[object Object]"
                                        height="2rem"
                                        class="sc-bdVaJa fDkeNf"
                                      ></div>
                                      <div
                                        width="9rem"
                                        height="1.6rem"
                                        class="sc-bdVaJa esyuYc"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span
                                aria-label="Encart publicitaire"
                                id="na3-s"
                                class="teal-apn gTargetId native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-m"
                                class="teal-apn gTargetId native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-l"
                                class="teal-apn gTargetId native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-xl"
                                class="teal-apn gTargetId native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-criteo-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-criteo-l-outlined"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-criteo-xl"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-criteo-xl-outlined"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-afsh-s"
                                class="teal-apn gTargetId native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-afsh-m"
                                class="teal-apn gTargetId native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-afsh-l"
                                class="teal-apn gTargetId native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-afsh-xl"
                                class="teal-apn gTargetId native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-afs-s"
                                class="teal-apn gTargetId native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-afs-m"
                                class="teal-apn gTargetId native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-afs-l"
                                class="teal-apn gTargetId native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na3-afs-xl"
                                class="teal-apn gTargetId native"
                              ></span>
                            </div>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2297908055.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        5
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 950 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >950<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Chessy 77700."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Chessy 77700
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Hier, 20:32."
                                        title="08 février 2023 à 20h32"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Hier, 20:32
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2293798871.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        1
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 1 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >1<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Port-la-Nouvelle 11210."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Port-la-Nouvelle 11210
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : 31 jan, 20:02."
                                        title="31 janvier 2023 à 20h02"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        31 jan, 20:02
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2284594482.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Recherche iphone 14"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Recherche iphone 14
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    ></div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Toulouse 31000."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Toulouse 31000
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 12:44."
                                        title="09 février 2023 à 12h44"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 12:44
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_featured__OObFO"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/1870938614.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi ipFinx"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        5
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      >
                                        <div
                                          color="white"
                                          class="sc-imABML jBTClJ"
                                        >
                                          <span class="Dqdzf _35DXM cJtdT"
                                            >À la une</span
                                          >
                                        </div>
                                        <div
                                          color="orange"
                                          class="sc-imABML bBIeQQ"
                                        >
                                          <span class="Dqdzf _35DXM cJtdT"
                                            >Urgent</span
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="IPhone 7 avec facture plus garantie"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        IPhone 7 avec facture plus garantie
                                      </p>
                                      <div
                                        color="black"
                                        class="sc-imABML bNPoke"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Pro</span
                                        >
                                      </div>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 109 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_3TeyH _137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >109<!-- --> €
                                          </span></span
                                        ><svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtIGhA"
                                        >
                                          <title>Baisse de prix</title>
                                          <use xlink:href="#SvgFall"></use>
                                        </svg>
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Paris 75012 12e Arrondissement."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Paris 75012 12e Arrondissement
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 15:11."
                                        title="09 février 2023 à 15h11"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 15:11
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2287195801.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        3
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 1 000 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >1 000<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Paris 75012."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Paris 75012
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 21:16."
                                        title="09 février 2023 à 21h16"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 21:16
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2296742979.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        2
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 256 Giga"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 256 Giga
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 800 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_3TeyH _137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >800<!-- --> €
                                          </span></span
                                        ><svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtIGhA"
                                        >
                                          <title>Baisse de prix</title>
                                          <use xlink:href="#SvgFall"></use>
                                        </svg>
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Paris 75001."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Paris 75001
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : 06 fév, 15:28."
                                        title="06 février 2023 à 15h28"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        06 fév, 15:28
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2297180027.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        2
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 pro violet 128gb"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 pro violet 128gb
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 1 250 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_3TeyH _137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >1 250<!-- --> €
                                          </span></span
                                        ><svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtIGhA"
                                        >
                                          <title>Baisse de prix</title>
                                          <use xlink:href="#SvgFall"></use>
                                        </svg>
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Aulnat 63510."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aulnat 63510
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : 07 fév, 13:25."
                                        title="07 février 2023 à 13h25"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        07 fév, 13:25
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div class="styles_ad__q8Vta" id="outlined">
                            <div class="styles_separator__gszvh"></div>
                            <div class="sc-bdVaJa crGigL apn-na">
                              <div
                                data-test-id="placeholder-native-outlined"
                                width="100%"
                                height="17rem"
                                display="flex"
                                overflow="hidden"
                                class="sc-bdVaJa gJOwzg"
                              >
                                <div class="_1XOrJ">
                                  <div display="flex" class="sc-bdVaJa gzoWJL">
                                    <div
                                      display="flex"
                                      width="[object Object]"
                                      height="17rem"
                                      class="sc-bdVaJa koCUQI"
                                    ></div>
                                    <div class="sc-bdVaJa bDWFJH">
                                      <div
                                        color="greyMedium"
                                        class="sc-imABML JnrLn"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Sponsorisé</span
                                        >
                                      </div>
                                      <div
                                        width="[object Object]"
                                        height="2.4rem"
                                        class="sc-bdVaJa eGlOOe"
                                      ></div>
                                      <div
                                        width="[object Object]"
                                        height="2rem"
                                        class="sc-bdVaJa fDkeNf"
                                      ></div>
                                      <div
                                        width="9rem"
                                        height="1.6rem"
                                        class="sc-bdVaJa esyuYc"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span
                                aria-label="Encart publicitaire"
                                id="na4-s"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na4-m"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na4-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na4-xl"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na4-criteo-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na4-criteo-l-outlined"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na4-criteo-xl"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na4-criteo-xl-outlined"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na4-afsh-s"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na4-afsh-m"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na4-afsh-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na4-afsh-xl"
                                class="teal-apn native"
                              ></span>
                            </div>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2297703702.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        2
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 128 go"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 128 go
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 760 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_3TeyH _137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >760<!-- --> €
                                          </span></span
                                        ><svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtIGhA"
                                        >
                                          <title>Baisse de prix</title>
                                          <use xlink:href="#SvgFall"></use>
                                        </svg>
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Bordeaux 33000."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Bordeaux 33000
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Hier, 14:28."
                                        title="08 février 2023 à 14h28"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Hier, 14:28
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2283220713.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        5
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 1 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >1<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Rezé 44400."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Rezé 44400
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : 05 fév, 21:00."
                                        title="05 février 2023 à 21h00"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        05 fév, 21:00
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2297452609.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        2
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 noir 128go neuf jamais ouvert"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 noir 128go neuf jamais ouvert
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 800 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_3TeyH _137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >800<!-- --> €
                                          </span></span
                                        ><svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtIGhA"
                                        >
                                          <title>Baisse de prix</title>
                                          <use xlink:href="#SvgFall"></use>
                                        </svg>
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Livry-Gargan 93190."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Livry-Gargan 93190
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : 07 fév, 21:49."
                                        title="07 février 2023 à 21h49"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        07 fév, 21:49
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2286561710.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        2
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 pro"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 pro
                                      </p>
                                      <div
                                        color="black"
                                        class="sc-imABML bNPoke"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Pro</span
                                        >
                                      </div>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 1 299 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_3TeyH _137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >1 299<!-- --> €
                                          </span></span
                                        ><svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtIGhA"
                                        >
                                          <title>Baisse de prix</title>
                                          <use xlink:href="#SvgFall"></use>
                                        </svg>
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Sarreguemines 57200."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Sarreguemines 57200
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 14:57."
                                        title="09 février 2023 à 14h57"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 14:57
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div class="styles_ad__q8Vta" id="outlined">
                            <div class="styles_separator__gszvh"></div>
                            <div class="sc-bdVaJa crGigL apn-na">
                              <div
                                data-test-id="placeholder-native-outlined"
                                width="100%"
                                height="17rem"
                                display="flex"
                                overflow="hidden"
                                class="sc-bdVaJa gJOwzg"
                              >
                                <div class="_1XOrJ">
                                  <div display="flex" class="sc-bdVaJa gzoWJL">
                                    <div
                                      display="flex"
                                      width="[object Object]"
                                      height="17rem"
                                      class="sc-bdVaJa koCUQI"
                                    ></div>
                                    <div class="sc-bdVaJa bDWFJH">
                                      <div
                                        color="greyMedium"
                                        class="sc-imABML JnrLn"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Sponsorisé</span
                                        >
                                      </div>
                                      <div
                                        width="[object Object]"
                                        height="2.4rem"
                                        class="sc-bdVaJa eGlOOe"
                                      ></div>
                                      <div
                                        width="[object Object]"
                                        height="2rem"
                                        class="sc-bdVaJa fDkeNf"
                                      ></div>
                                      <div
                                        width="9rem"
                                        height="1.6rem"
                                        class="sc-bdVaJa esyuYc"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span
                                aria-label="Encart publicitaire"
                                id="na5-s"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na5-m"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na5-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na5-xl"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na5-criteo-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na5-criteo-l-outlined"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na5-criteo-xl"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na5-criteo-xl-outlined"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na5-afsh-s"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na5-afsh-m"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na5-afsh-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na5-afsh-xl"
                                class="teal-apn native"
                              ></span>
                            </div>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2292132819.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        3
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 plus 128gb"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 plus 128gb
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 880 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >880<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Nantes 44000."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Nantes 44000
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 18:46."
                                        title="09 février 2023 à 18h46"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 18:46
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2286787573.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        4
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 noir 128go"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 noir 128go
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 850 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >850<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Paris 75012."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Paris 75012
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 12:04."
                                        title="09 février 2023 à 12h04"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 12:04
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2279830000.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        1
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 noir"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 noir
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 930 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >930<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Montluçon 03100."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Montluçon 03100
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 18:50."
                                        title="09 février 2023 à 18h50"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 18:50
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2297780256.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        2
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 Pro neuf scellé"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 Pro neuf scellé
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 1 200 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >1 200<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Paris 75116 16e Arrondissement."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Paris 75116 16e Arrondissement
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Hier, 16:44."
                                        title="08 février 2023 à 16h44"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Hier, 16:44
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div class="styles_ad__q8Vta" id="outlined">
                            <div class="styles_separator__gszvh"></div>
                            <div class="sc-bdVaJa crGigL apn-na">
                              <div
                                data-test-id="placeholder-native-outlined"
                                width="100%"
                                height="17rem"
                                display="flex"
                                overflow="hidden"
                                class="sc-bdVaJa gJOwzg"
                              >
                                <div class="_1XOrJ">
                                  <div display="flex" class="sc-bdVaJa gzoWJL">
                                    <div
                                      display="flex"
                                      width="[object Object]"
                                      height="17rem"
                                      class="sc-bdVaJa koCUQI"
                                    ></div>
                                    <div class="sc-bdVaJa bDWFJH">
                                      <div
                                        color="greyMedium"
                                        class="sc-imABML JnrLn"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Sponsorisé</span
                                        >
                                      </div>
                                      <div
                                        width="[object Object]"
                                        height="2.4rem"
                                        class="sc-bdVaJa eGlOOe"
                                      ></div>
                                      <div
                                        width="[object Object]"
                                        height="2rem"
                                        class="sc-bdVaJa fDkeNf"
                                      ></div>
                                      <div
                                        width="9rem"
                                        height="1.6rem"
                                        class="sc-bdVaJa esyuYc"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span
                                aria-label="Encart publicitaire"
                                id="na6-m"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na6-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na6-s"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na6-xl"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na6-criteo-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na6-criteo-l-outlined"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na6-criteo-xl"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na6-criteo-xl-outlined"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na6-afsh-s"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na6-afsh-m"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na6-afsh-l"
                                class="teal-apn native"
                              ></span
                              ><span
                                aria-label="Encart publicitaire"
                                id="na6-afsh-xl"
                                class="teal-apn native"
                              ></span>
                            </div>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2282746948.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        3
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 Plus"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 Plus
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 900 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >900<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Aubagne 13400."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aubagne 13400
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 18:01."
                                        title="09 février 2023 à 18h01"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 18:01
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2295963375.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        3
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 400 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >400<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Six-Fours-les-Plages 83140."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Six-Fours-les-Plages 83140
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : 05 fév, 11:06."
                                        title="05 février 2023 à 11h06"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        05 fév, 11:06
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2298375848.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        1
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 pro 256gb violet"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 pro 256gb violet
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 1 250 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >1 250<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Buxerolles 86180."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Buxerolles 86180
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 20:41."
                                        title="09 février 2023 à 20h41"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 20:41
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2283780898.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        1
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 128 giga noir"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 128 giga noir
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 850 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >850<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Avignon 84000."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Avignon 84000
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 21:36."
                                        title="09 février 2023 à 21h36"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 21:36
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2274525573.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        1
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 Plus Bleu 128gb"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 Plus Bleu 128gb
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 750 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >750<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Boulogne-Billancourt 92100."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Boulogne-Billancourt 92100
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : Aujourd&#x27;hui, 21:46."
                                        title="09 février 2023 à 21h46"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Aujourd&#x27;hui, 21:46
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2295346161.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        1
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 600 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_3TeyH _137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >600<!-- --> €
                                          </span></span
                                        ><svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtIGhA"
                                        >
                                          <title>Baisse de prix</title>
                                          <use xlink:href="#SvgFall"></use>
                                        </svg>
                                      </p>
                                    </div>
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa domALE"
                                    >
                                      <div
                                        color="black"
                                        class="sc-imABML hMQYzw"
                                      >
                                        <span class="Dqdzf _35DXM cJtdT"
                                          >Livraison possible</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Corbeil-Essonnes 91100."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Corbeil-Essonnes 91100
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : 04 fév, 08:55."
                                        title="04 février 2023 à 08h55"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        04 fév, 08:55
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div
                            class="styles_adCard__HQRFN styles_classified__rnsg4"
                          >
                            <div class="styles_separator__gszvh"></div>
                            <a
                              data-test-id="ad"
                              data-qa-id="aditem_container"
                              class="sc-jMMfwr dXhEzv"
                              href="/telephonie/2278214949.htm"
                              ><div
                                data-test-id="adcard-outlined"
                                class="sc-hAXbOi loPmwk"
                              >
                                <div class="sc-TuwoP dqOxLv sc-cCVOAp joxNRR">
                                  <div class="sc-bJHhxl dwMzGZ">
                                    <div class="sc-iNhVCk ioRWNd">
                                      <div class="_2JtY0">
                                        <div class="LazyLoad"></div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        class="sc-eAKXzc jxUpOA"
                                      >
                                        3
                                      </div>
                                      <div
                                        display="flex"
                                        class="sc-bdVaJa sc-cfWELz jkSJys"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-kAdXeD cwfzBF">
                                  <div display="flex" class="sc-bdVaJa dbnPvT">
                                    <div
                                      display="flex"
                                      class="sc-bdVaJa ggRpjx"
                                    >
                                      <p
                                        data-qa-id="aditem_title"
                                        title="Iphone 14 neuf 256go"
                                        class="sc-fEUNkw kNrYOs"
                                      >
                                        Iphone 14 neuf 256go
                                      </p>
                                    </div>
                                    <div
                                      display="inline-flex"
                                      class="sc-bdVaJa iEGrlM"
                                    >
                                      <p
                                        data-test-id="price"
                                        aria-label="Prix: 900 €."
                                        class="sc-dRFtgE jQDzAy"
                                      >
                                        <span
                                          data-qa-id="aditem_price"
                                          data-test-id="Price"
                                          class="_137P- _3j0OU P4PEa"
                                          ><span class="_137P- _35DXM P4PEa"
                                            >900<!-- --> €
                                          </span></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                  <div display="flex" class="sc-bdVaJa bvYuKY">
                                    <div>
                                      <p
                                        aria-label="Catégorie : Téléphonie."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Téléphonie
                                      </p>
                                      <p
                                        aria-label="Située à Paris 75012 Aligre-Gare de Lyon."
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        Paris 75012 Aligre-Gare de Lyon
                                      </p>
                                      <p
                                        aria-label="Date de dépôt : 01 jan, 01:01."
                                        title="01 janvier 2023 à 01h01"
                                        class="_2k43C Dqdzf _3j0OU cJtdT"
                                      >
                                        01 jan, 01:01
                                      </p>
                                    </div>
                                    <div
                                      display="inline-block"
                                      aria-hidden="true"
                                      class="sc-bdVaJa kzgkzO"
                                    >
                                      <button
                                        data-test-id="adcard_favorite_button"
                                        data-qa-id="listitem_save_ad"
                                        class="sc-hUfwpO bFEmgM"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="img"
                                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 dAkClY"
                                        >
                                          <title>
                                            Ajouter l&#x27;annonce aux favoris
                                          </title>
                                          <use
                                            xlink:href="#SvgHeartoutline"
                                          ></use>
                                        </svg>
                                      </button>
                                      <div class="sc-gkFcWv jBwYSf"></div>
                                    </div>
                                  </div>
                                </div></div
                            ></a>
                          </div>
                          <div></div>
                        </div>
                        <div class="sc-fjhmcy WrNOe">
                          <div
                            role="button"
                            aria-label="Sauvegarder la recherche"
                            aria-expanded="true"
                            data-qa-id="cta-save_search-button"
                            class="sc-hwcHae iDxQmT"
                          >
                            <div
                              class="_21rqc _1y_ge _3QJkO _137P- _3j0OU P4PEa"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                role="img"
                                class="sc-bdVaJa src___StyledBox-sc-fochin-0 itFAwO"
                              >
                                <use
                                  xlink:href="#SvgNotificationoutline"
                                ></use></svg
                              ><span class="_1J-MJ FUcqi _137P- _35DXM P4PEa"
                                ><div class="sc-lnmtFM fykVdR">
                                  Sauvegarder la recherche
                                </div></span
                              >
                            </div>
                          </div>
                        </div>
                        <nav aria-label="pagination" class="sc-bIqbHp iMVbSV">
                          <ul class="sc-jxGEyO ddsRRe">
                            <li class="sc-gacfCG eJWKLc">
                              <span
                                title="Page précédente"
                                aria-disabled="true"
                                class="sc-dEfkYy eXukpe"
                                ><svg
                                  viewBox="0 0 24 24"
                                  role="img"
                                  class="sc-bdVaJa src___StyledBox-sc-fochin-0 fwhFyd"
                                >
                                  <use xlink:href="#SvgChevronleft"></use></svg
                              ></span>
                            </li>
                            <li class="sc-gacfCG eJWKLc">
                              <span
                                title="Page 1"
                                aria-current="page"
                                class="sc-dEfkYy fzSgLY"
                                >1</span
                              >
                            </li>
                            <li class="sc-gacfCG eJWKLc">
                              <a
                                title="Page 2"
                                rel="nofollow"
                                class="sc-dEfkYy ThpAG"
                                href="/recherche?text=iphone%2014&amp;page=2"
                                >2</a
                              >
                            </li>
                            <li class="sc-gacfCG eJWKLc">
                              <a
                                title="Page 3"
                                rel="nofollow"
                                class="sc-dEfkYy ThpAG"
                                href="/recherche?text=iphone%2014&amp;page=3"
                                >3</a
                              >
                            </li>
                            <li class="sc-gacfCG eJWKLc">
                              <a
                                title="Page 4"
                                rel="nofollow"
                                class="sc-dEfkYy ThpAG"
                                href="/recherche?text=iphone%2014&amp;page=4"
                                >4</a
                              >
                            </li>
                            <li class="sc-gacfCG eJWKLc">
                              <a
                                title="Page 5"
                                rel="nofollow"
                                class="sc-dEfkYy ThpAG"
                                href="/recherche?text=iphone%2014&amp;page=5"
                                >5</a
                              >
                            </li>
                            <li class="sc-gacfCG eJWKLc">
                              <a
                                title="Page 6"
                                rel="nofollow"
                                class="sc-dEfkYy ThpAG"
                                href="/recherche?text=iphone%2014&amp;page=6"
                                >6</a
                              >
                            </li>
                            <li class="sc-gacfCG eJWKLc">
                              <a
                                title="Page 7"
                                rel="nofollow"
                                class="sc-dEfkYy ThpAG"
                                href="/recherche?text=iphone%2014&amp;page=7"
                                >7</a
                              >
                            </li>
                            <li class="sc-gacfCG eJWKLc">
                              <a
                                title="Page 8"
                                rel="nofollow"
                                class="sc-dEfkYy ThpAG"
                                href="/recherche?text=iphone%2014&amp;page=8"
                                >8</a
                              >
                            </li>
                            <li class="sc-gacfCG eJWKLc">
                              <a
                                title="Page 9"
                                rel="nofollow"
                                class="sc-dEfkYy ThpAG"
                                href="/recherche?text=iphone%2014&amp;page=9"
                                >9</a
                              >
                            </li>
                            <li class="sc-gacfCG eJWKLc">
                              <a
                                title="Page 10"
                                rel="nofollow"
                                class="sc-dEfkYy ThpAG"
                                href="/recherche?text=iphone%2014&amp;page=10"
                                >10</a
                              >
                            </li>
                            <li class="sc-gacfCG eJWKLc">
                              <a
                                title="Page 11"
                                rel="nofollow"
                                class="sc-dEfkYy ThpAG"
                                href="/recherche?text=iphone%2014&amp;page=11"
                                >11</a
                              >
                            </li>
                            <li class="sc-gacfCG eJWKLc">
                              <a
                                title="Page 12"
                                rel="nofollow"
                                class="sc-dEfkYy ThpAG"
                                href="/recherche?text=iphone%2014&amp;page=12"
                                >12</a
                              >
                            </li>
                            <li class="sc-gacfCG eJWKLc">
                              <a
                                title="Page 13"
                                rel="nofollow"
                                class="sc-dEfkYy ThpAG"
                                href="/recherche?text=iphone%2014&amp;page=13"
                                >13</a
                              >
                            </li>
                            <li class="sc-gacfCG eJWKLc">
                              <a
                                title="Page suivante"
                                rel="nofollow"
                                class="sc-dEfkYy ThpAG"
                                href="/recherche?text=iphone%2014&amp;page=2"
                                ><svg
                                  viewBox="0 0 24 24"
                                  role="img"
                                  class="sc-bdVaJa src___StyledBox-sc-fochin-0 kZINAN"
                                >
                                  <use xlink:href="#SvgChevronright"></use></svg
                              ></a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div class="styles_sideColumn__MyCwB">
                        <div
                          class="styles_AdvertisingSky__RwLgC apn-sk skyscraper"
                        >
                          <span
                            aria-label="Encart publicitaire"
                            id="lvr-l"
                            class="teal-apn"
                          ></span
                          ><span
                            aria-label="Encart publicitaire"
                            id="lvr-xl"
                            class="teal-apn"
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <section data-hydration-on-demand="true">
                  <div class="sc-cbkKFq kMwhSo">
                    <div class="sc-RefOD klIOhy">
                      <div class="sc-fYiAbW gtBqBD">
                        <div class="sc-dUjcNx jzvAZY">
                          <div class="sc-gHboQg eNFJSp">
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <a
                                  title="Emploi"
                                  class="Roh2X _12Vyh Snj6Y Mb3fh Dqdzf _35DXM cJtdT _1-9Vf"
                                  href="/_emploi_/offres"
                                  >Emploi</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Offres d&#x27;emploi"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/offres_d_emploi/offres"
                                  >Offres d&#x27;emploi</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/f/offres_d_emploi/jobstudy--6"
                                  title="Offres d&#x27;emploi Cadres"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  >Offres d&#x27;emploi Cadres</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Formations Professionnelles"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/formations_professionnelles/offres"
                                  >Formations Professionnelles</a
                                >
                              </li>
                            </ul>
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <a
                                  title="Véhicules"
                                  class="Roh2X _12Vyh Snj6Y Mb3fh Dqdzf _35DXM cJtdT _1-9Vf"
                                  href="/_vehicules_/offres"
                                  >Véhicules</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Voitures"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/voitures/offres"
                                  >Voitures</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Motos"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/motos/offres"
                                  >Motos</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Caravaning"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/caravaning/offres"
                                  >Caravaning</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Utilitaires"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/utilitaires/offres"
                                  >Utilitaires</a
                                >
                              </li>
                              <li>
                                <a
                                  href="https://www.truckscorner.fr#at_medium=custom4&amp;at_campaign=fr_tc_veh_mot_lbc_part_site-menu-autopromo-lbc_______"
                                  title="Camions"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  >Camions</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Nautisme"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/nautisme/offres"
                                  >Nautisme</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Équipement auto"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/equipement_auto/offres"
                                  >Équipement auto</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Équipement moto"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/equipement_moto/offres"
                                  >Équipement moto</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Équipement caravaning"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/equipement_caravaning/offres"
                                  >Équipement caravaning</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Équipement nautisme"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/equipement_nautisme/offres"
                                  >Équipement nautisme</a
                                >
                              </li>
                            </ul>
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <a
                                  title="Immobilier"
                                  class="Roh2X _12Vyh Snj6Y Mb3fh Dqdzf _35DXM cJtdT _1-9Vf"
                                  href="/_immobilier_/offres"
                                  >Immobilier</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Ventes immobilières"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/ventes_immobilieres/offres"
                                  >Ventes immobilières</a
                                >
                              </li>
                              <li>
                                <a
                                  href="https://immobilierneuf.leboncoin.fr/"
                                  title="Immobilier Neuf"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  >Immobilier Neuf</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Locations"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/locations/offres"
                                  >Locations</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Colocations"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/colocations/offres"
                                  >Colocations</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Bureaux &amp; Commerces"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/bureaux_commerces/offres"
                                  >Bureaux &amp; Commerces</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="sc-gHboQg eNFJSp">
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <a
                                  title="Vacances"
                                  class="Roh2X _12Vyh Snj6Y Mb3fh Dqdzf _35DXM cJtdT _1-9Vf"
                                  href="/_vacances_/offres"
                                  >Vacances</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Locations &amp; Gîtes"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/locations_gites/offres"
                                  >Locations &amp; Gîtes</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Chambres d&#x27;hôtes"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/chambres_d_hotes/offres"
                                  >Chambres d&#x27;hôtes</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Campings"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/campings/offres"
                                  >Campings</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Hébergements insolites"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/hebergements_insolites/offres"
                                  >Hébergements insolites</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Hôtels"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/hotels/offres"
                                  >Hôtels</a
                                >
                              </li>
                              <li>
                                <a
                                  href="https://www.locasun-vp.fr/?afiliate=leboncoin&amp;utm_campaign=liencat_locasunvp_leboncoin&amp;utm_source=leboncoin&amp;utm_medium=cpc#ectrans=1"
                                  title="Ventes flash vacances"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  >Ventes flash vacances</a
                                >
                              </li>
                              <li>
                                <a
                                  href="https://www.locasun.fr/location-vacances/Espagne?afiliate=leboncoinfr&amp;utm_source=leboncoinfr&amp;utm_medium=cpa&amp;utm_campaign=lienespagne-leboncoinfr"
                                  title="Locations en Espagne"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  >Locations en Espagne</a
                                >
                              </li>
                            </ul>
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <a
                                  title="Loisirs"
                                  class="Roh2X _12Vyh Snj6Y Mb3fh Dqdzf _35DXM cJtdT _1-9Vf"
                                  href="/_loisirs_/offres"
                                  >Loisirs</a
                                >
                              </li>
                              <li>
                                <a
                                  title="DVD - Films"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/dvd_films/offres"
                                  >DVD - Films</a
                                >
                              </li>
                              <li>
                                <a
                                  title="CD - Musique"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/cd_musique/offres"
                                  >CD - Musique</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Livres"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/livres/offres"
                                  >Livres</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Vélos"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/velos/offres"
                                  >Vélos</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Sports &amp; Hobbies"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/sports_hobbies/offres"
                                  >Sports &amp; Hobbies</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Instruments de musique"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/instruments_de_musique/offres"
                                  >Instruments de musique</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Collection"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/collection/offres"
                                  >Collection</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Jeux &amp; Jouets"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/jeux_jouets/offres"
                                  >Jeux &amp; Jouets</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Vins &amp; Gastronomie"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/vins_gastronomie/offres"
                                  >Vins &amp; Gastronomie</a
                                >
                              </li>
                            </ul>
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <a
                                  title="Animaux"
                                  class="Roh2X _12Vyh Snj6Y Mb3fh Dqdzf _35DXM cJtdT _1-9Vf"
                                  href="/_animaux_/offres"
                                  >Animaux</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Animaux"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/animaux/offres"
                                  >Animaux</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="sc-dUjcNx jzvAZY">
                          <div class="sc-gHboQg eNFJSp">
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <a
                                  title="Mode"
                                  class="Roh2X _12Vyh Snj6Y Mb3fh Dqdzf _35DXM cJtdT _1-9Vf"
                                  href="/_mode_/offres"
                                  >Mode</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Vêtements"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/vetements/offres"
                                  >Vêtements</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Chaussures"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/chaussures/offres"
                                  >Chaussures</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Accessoires &amp; Bagagerie"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/accessoires_bagagerie/offres"
                                  >Accessoires &amp; Bagagerie</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Montres &amp; Bijoux"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/montres_bijoux/offres"
                                  >Montres &amp; Bijoux</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Équipement bébé"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/equipement_bebe/offres"
                                  >Équipement bébé</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Vêtements bébé"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/vetements_bebe/offres"
                                  >Vêtements bébé</a
                                >
                              </li>
                              <li>
                                <a
                                  href="https://www.videdressing.com/femme/c-c5988.html"
                                  title="Luxe et Tendance"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  >Luxe et Tendance</a
                                >
                              </li>
                            </ul>
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <a
                                  title="Multimédia"
                                  class="Roh2X _12Vyh Snj6Y Mb3fh Dqdzf _35DXM cJtdT _1-9Vf"
                                  href="/_multimedia_/offres"
                                  >Multimédia</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Informatique"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/informatique/offres"
                                  >Informatique</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Consoles &amp; Jeux vidéo"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/consoles_jeux_video/offres"
                                  >Consoles &amp; Jeux vidéo</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Image &amp; Son"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/image_son/offres"
                                  >Image &amp; Son</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Téléphonie"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/telephonie/offres"
                                  >Téléphonie</a
                                >
                              </li>
                            </ul>
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <a
                                  title="Services"
                                  class="Roh2X _12Vyh Snj6Y Mb3fh Dqdzf _35DXM cJtdT _1-9Vf"
                                  href="/_services_/offres"
                                  >Services</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Prestations de services"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/prestations_de_services/offres"
                                  >Prestations de services</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Billetterie"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/billetterie/offres"
                                  >Billetterie</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Évènements"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/evenements/offres"
                                  >Évènements</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Cours particuliers"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/cours_particuliers/offres"
                                  >Cours particuliers</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Covoiturage"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/covoiturage/offres"
                                  >Covoiturage</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="sc-gHboQg eNFJSp">
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <a
                                  title="Maison"
                                  class="Roh2X _12Vyh Snj6Y Mb3fh Dqdzf _35DXM cJtdT _1-9Vf"
                                  href="/_maison_/offres"
                                  >Maison</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Ameublement"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/ameublement/offres"
                                  >Ameublement</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Électroménager"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/electromenager/offres"
                                  >Électroménager</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Arts de la table"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/arts_de_la_table/offres"
                                  >Arts de la table</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Décoration"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/decoration/offres"
                                  >Décoration</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Linge de maison"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/linge_de_maison/offres"
                                  >Linge de maison</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Bricolage"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/bricolage/offres"
                                  >Bricolage</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Jardinage"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/jardinage/offres"
                                  >Jardinage</a
                                >
                              </li>
                            </ul>
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <a
                                  title="Matériel Professionnel"
                                  class="Roh2X _12Vyh Snj6Y Mb3fh Dqdzf _35DXM cJtdT _1-9Vf"
                                  href="/_materiel_professionnel_/offres"
                                  >Matériel Professionnel</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Matériel agricole"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/materiel_agricole/offres"
                                  >Matériel agricole</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Transport - Manutention"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/transport_manutention/offres"
                                  >Transport - Manutention</a
                                >
                              </li>
                              <li>
                                <a
                                  title="BTP - Chantier gros-oeuvre"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/btp_chantier_gros_oeuvre/offres"
                                  >BTP - Chantier gros-oeuvre</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Outillage - Matériaux 2nd-oeuvre"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/outillage_materiaux_2nd_oeuvre/offres"
                                  >Outillage - Matériaux 2nd-oeuvre</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Équipements industriels"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/equipements_industriels/offres"
                                  >Équipements industriels</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Restauration - Hôtellerie"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/restauration_hotellerie/offres"
                                  >Restauration - Hôtellerie</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Fournitures de bureau"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/fournitures_de_bureau/offres"
                                  >Fournitures de bureau</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Commerces &amp; Marchés"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/commerces_marches/offres"
                                  >Commerces &amp; Marchés</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Matériel médical"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/materiel_medical/offres"
                                  >Matériel médical</a
                                >
                              </li>
                            </ul>
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <a
                                  title="Divers"
                                  class="Roh2X _12Vyh Snj6Y Mb3fh Dqdzf _35DXM cJtdT _1-9Vf"
                                  href="/autres/offres"
                                  >Divers</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Autres"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/autres/offres"
                                  >Autres</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="sc-krvtoX eoUOQm"></div>
                      <div class="sc-fYiAbW gtBqBD">
                        <div class="sc-dUjcNx jzvAZY">
                          <div class="sc-gHboQg eNFJSp">
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <p
                                  class="_3T4fR Snj6Y _PypL Dqdzf _35DXM cJtdT _1-9Vf"
                                >
                                  Ouest
                                </p>
                              </li>
                              <li>
                                <a
                                  title="Basse-Normandie"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/basse_normandie"
                                  >Basse-Normandie</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Bretagne"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/bretagne"
                                  >Bretagne</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Pays de la Loire"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/pays_de_la_loire"
                                  >Pays de la Loire</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Poitou-Charentes"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/poitou_charentes"
                                  >Poitou-Charentes</a
                                >
                              </li>
                            </ul>
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <p
                                  class="_3T4fR Snj6Y _PypL Dqdzf _35DXM cJtdT _1-9Vf"
                                >
                                  Sud-Ouest
                                </p>
                              </li>
                              <li>
                                <a
                                  title="Aquitaine"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/aquitaine"
                                  >Aquitaine</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Midi-Pyrénées"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/midi_pyrenees"
                                  >Midi-Pyrénées</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="sc-gHboQg eNFJSp">
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <p
                                  class="_3T4fR Snj6Y _PypL Dqdzf _35DXM cJtdT _1-9Vf"
                                >
                                  Sud-Est
                                </p>
                              </li>
                              <li>
                                <a
                                  title="Corse"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/corse"
                                  >Corse</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Languedoc-Roussillon"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/languedoc_roussillon"
                                  >Languedoc-Roussillon</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Provence-Alpes-Côte d’Azur"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/provence_alpes_cote_d_azur"
                                  >Provence-Alpes-Côte d’Azur</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Rhône-Alpes"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/rhone_alpes"
                                  >Rhône-Alpes</a
                                >
                              </li>
                            </ul>
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <p
                                  class="_3T4fR Snj6Y _PypL Dqdzf _35DXM cJtdT _1-9Vf"
                                >
                                  Est
                                </p>
                              </li>
                              <li>
                                <a
                                  title="Alsace"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/alsace"
                                  >Alsace</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Bourgogne"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/bourgogne"
                                  >Bourgogne</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Champagne-Ardenne"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/champagne_ardenne"
                                  >Champagne-Ardenne</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Franche-Comté"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/franche_comte"
                                  >Franche-Comté</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Lorraine"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/lorraine"
                                  >Lorraine</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="sc-dUjcNx jzvAZY">
                          <div class="sc-gHboQg eNFJSp">
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <p
                                  class="_3T4fR Snj6Y _PypL Dqdzf _35DXM cJtdT _1-9Vf"
                                >
                                  Nord
                                </p>
                              </li>
                              <li>
                                <a
                                  title="Haute-Normandie"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/haute_normandie"
                                  >Haute-Normandie</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Nord-Pas-de-Calais"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/nord_pas_de_calais"
                                  >Nord-Pas-de-Calais</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Picardie"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/picardie"
                                  >Picardie</a
                                >
                              </li>
                            </ul>
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <p
                                  class="_3T4fR Snj6Y _PypL Dqdzf _35DXM cJtdT _1-9Vf"
                                >
                                  Centre
                                </p>
                              </li>
                              <li>
                                <a
                                  title="Auvergne"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/auvergne"
                                  >Auvergne</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Centre"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/centre"
                                  >Centre</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Ile-de-France"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/ile_de_france"
                                  >Ile-de-France</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Limousin"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/limousin"
                                  >Limousin</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="sc-gHboQg eNFJSp">
                            <ul class="sc-fOKMvo kQnZPa">
                              <li>
                                <p
                                  class="_3T4fR Snj6Y _PypL Dqdzf _35DXM cJtdT _1-9Vf"
                                >
                                  Drom
                                </p>
                              </li>
                              <li>
                                <a
                                  title="Guadeloupe"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/guadeloupe"
                                  >Guadeloupe</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Martinique"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/martinique"
                                  >Martinique</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Guyane"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/guyane"
                                  >Guyane</a
                                >
                              </li>
                              <li>
                                <a
                                  title="Réunion"
                                  class="_2k43C _12Vyh Dqdzf _35DXM cJtdT"
                                  href="/annonces/offres/reunion"
                                  >Réunion</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
            <div id="footer" class="nDpxN">
              <footer class="sc-gpHHfC kXzIvn">
                <div class="sc-bdVaJa brSStf">
                  <div class="sc-bdVaJa sc-gVyKpa drkIoC">
                    <div display="flex" class="sc-bdVaJa krCuDX">
                      <div class="sc-bdVaJa sc-likbZx ciWPmi">
                        <div class="sc-bdVaJa sc-likbZx ciWPmi">
                          <li class="sc-eKZiaR bZWctB">à propos du boncoin</li>
                          <li class="sc-drMfKT joVIZf">
                            <a
                              href="https://leboncoincorporate.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Qui sommes-nous ?"
                              >Qui sommes-nous ?</a
                            >
                          </li>
                          <li class="sc-drMfKT joVIZf">
                            <a
                              title="Nous rejoindre"
                              href="/boutique/11532/postulez_aux_offres_d_emploi_leboncoin.htm"
                              >Nous rejoindre</a
                            >
                          </li>
                          <li class="sc-drMfKT joVIZf">
                            <a
                              href="https://leboncoincorporate.com/nos-engagements/"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Nos engagements"
                              >Nos engagements</a
                            >
                          </li>
                          <li class="sc-drMfKT joVIZf">
                            <a
                              href="https://www.laveniradubon.fr"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="L’Avenir a du bon"
                              >L’Avenir a du bon</a
                            >
                          </li>
                          <li class="sc-drMfKT joVIZf">
                            <a
                              href="https://www.lebonobservatoire.fr"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Le bon observatoire"
                              >Le bon observatoire</a
                            >
                          </li>
                        </div>
                        <div class="sc-bdVaJa sc-likbZx ciWPmi">
                          <li class="sc-eKZiaR bZWctB">Nos applications</li>
                          <li class="sc-drMfKT joVIZf">
                            <div class="styles_appBadges__RigVE">
                              <a
                                class="styles_appBadge__3Ct_4"
                                rel="nofollow noopener noreferrer"
                                href="https://itunes.apple.com/fr/app/leboncoin/id484115113"
                                title="Télécharger l’application iOS"
                                target="_blank"
                                ><div class="LazyLoad"></div></a
                              ><a
                                class="styles_appBadge__3Ct_4"
                                rel="nofollow noopener noreferrer"
                                href="https://play.google.com/store/apps/details?id=fr.leboncoin"
                                title="Télécharger l’application Android"
                                target="_blank"
                                ><div class="LazyLoad"></div></a
                              ><a
                                class="styles_appBadge__3Ct_4"
                                rel="nofollow noopener noreferrer"
                                href="https://appgallery.cloud.huawei.com/ag/n/app/C101705887?channelId=leboncoin.fr&amp;id=061f09a725194fdfbb58352c03b2db7b&amp;s=CD1AE1B024AB543E1F77EA6EC83A69D1C085AD4FD562DACAC9B0EFE131499C0A&amp;detailType=0&amp;v=&amp;callType=AGDLINK&amp;installType=0000"
                                title="Télécharger l’application sur l’AppGallery"
                                target="_blank"
                                ><div class="LazyLoad"></div
                              ></a>
                            </div>
                          </li>
                        </div>
                      </div>
                      <div class="sc-bdVaJa sc-likbZx ciWPmi">
                        <li class="sc-eKZiaR bZWctB">Informations légales</li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            rel="nofollow"
                            title="Conditions générales d’utilisation"
                            href="/dc/cgu"
                            >Conditions générales d’utilisation</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            rel="nofollow"
                            title="Référencement et classement des annonces"
                            href="/dc/rules"
                            >Référencement et classement des annonces</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            href="https://www.leboncoin.fr/dc/cgv"
                            rel="nofollow"
                            title="Conditions générales de vente"
                            >Conditions générales de vente</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            rel="nofollow"
                            title="Vie privée / cookies"
                            href="/dc/cookies"
                            >Vie privée / cookies</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            rel="nofollow"
                            title="Vos droits et obligations"
                            href="/dc/vos_droits_et_obligations"
                            >Vos droits et obligations</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            rel="nofollow"
                            title="Avis utilisateurs"
                            href="/dc/avis_utilisateurs"
                            >Avis utilisateurs</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            rel="nofollow"
                            title="Charte de bonne conduite"
                            href="/dc/charte_de_bonne_conduite"
                            >Charte de bonne conduite</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            rel="nofollow"
                            title="Paiement en plusieurs fois"
                            href="/dc/paiement_en_plusieurs_fois"
                            >Paiement en plusieurs fois</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            rel="nofollow"
                            title="Décisions de justice"
                            href="/dc/decisions_de_justice"
                            >Décisions de justice</a
                          >
                        </li>
                      </div>
                      <div class="sc-bdVaJa sc-likbZx ciWPmi">
                        <li class="sc-eKZiaR bZWctB">Nos solutions pros</li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            href="https://leboncoinpublicite.fr/"
                            title="Publicité"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-qa-id="footer_pub_link"
                            >Publicité</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            href="https://leboncoinsolutionspro.fr/immobilier"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Professionnels de l’immobilier"
                            data-qa-id="footer_real_estate_link"
                            >Professionnels de l’immobilier</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            href="https://leboncoinsolutionspro.fr/emploi"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Vos recrutements"
                            data-qa-id="footer_recruitment_link"
                            >Vos recrutements</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            href="https://leboncoinsolutionspro.fr/automobile"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Professionnels de l&#x27;auto"
                            data-qa-id="footer_auto_link"
                            >Professionnels de l’auto</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            href="https://leboncoinsolutionspro.fr/location-de-vacances"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Professionnels du tourisme"
                            data-qa-id="footer_holidays_link"
                            >Professionnels du tourisme</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            href="https://leboncoinsolutionspro.fr/commerces-services"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Autres solutions professionnelles"
                            data-qa-id="footer_multicat_link"
                            >Autres solutions professionnelles</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            title="Annuaire des professionnels"
                            data-qa-id="footer_pro_phonebook_link"
                            href="/boutiques/tout_secteur_d_activite/toutes_categories"
                            >Annuaire des professionnels</a
                          >
                        </li>
                        <li class="sc-drMfKT joVIZf">
                          <a
                            title="Dépôt gratuit d&#x27;emploi pour les TPE"
                            data-qa-id="footer_jobsTPE_link"
                            href="/solutions-emploi/offre-emploi-tpe"
                            >Dépôt gratuit d’emploi pour les TPE</a
                          >
                        </li>
                      </div>
                      <div class="sc-bdVaJa sc-likbZx ciWPmi">
                        <div class="sc-bdVaJa sc-likbZx ciWPmi">
                          <li class="sc-eKZiaR bZWctB">Des questions ?</li>
                          <li class="sc-drMfKT joVIZf">
                            <a
                              href="https://assistance.leboncoin.info/hc/fr"
                              title="Aide"
                              >Aide</a
                            >
                          </li>
                          <li class="sc-drMfKT joVIZf">
                            <a
                              title="Le service de paiement sécurisé et la livraison"
                              href="/paiement-securise-livraison"
                              >Le service de paiement sécurisé et la
                              livraison</a
                            >
                          </li>
                          <li class="sc-drMfKT joVIZf">
                            <a
                              title="Le porte-monnaie"
                              href="/service/porte-monnaie"
                              >Le porte-monnaie</a
                            >
                          </li>
                          <li class="sc-drMfKT joVIZf">
                            <a
                              title="Le service de réservation de vacances en ligne pour les hôtes"
                              href="/reservation-de-vacances/hote"
                              >Le service de réservation de vacances en ligne
                              pour les hôtes</a
                            >
                          </li>
                          <li class="sc-drMfKT joVIZf">
                            <a
                              title="Votre dossier de location en ligne"
                              href="/immo/profil-locataire"
                              >Votre dossier de location en ligne</a
                            >
                          </li>
                          <li class="sc-drMfKT joVIZf">
                            <a
                              href="https://status.leboncoin.fr"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              title="Statut de nos services"
                              >Statut de nos services</a
                            >
                          </li>
                        </div>
                        <div class="sc-bdVaJa sc-likbZx ciWPmi">
                          <li class="sc-eKZiaR bZWctB">
                            Vous êtes à l’étranger ?
                          </li>
                          <li class="sc-drMfKT joVIZf">
                            <div class="R29Kl">
                              <div class="_1d8an _3Hrjq">
                                <div class="_2-TcU">
                                  <svg
                                    viewBox="0 0 512 336"
                                    role="img"
                                    class="sc-bdVaJa src___StyledBox-sc-fochin-0 hoCZjG"
                                  >
                                    <use xlink:href="#SvgFlagFr"></use></svg
                                  >France
                                </div>
                                <svg
                                  viewBox="0 0 24 24"
                                  role="img"
                                  class="sc-bdVaJa src___StyledBox-sc-fochin-0 etcxvx"
                                >
                                  <use xlink:href="#SvgChevrondown"></use>
                                </svg>
                              </div>
                            </div>
                          </li>
                        </div>
                      </div>
                    </div>
                    <ul class="sc-bEjcJn gQVBgo">
                      <li class="sc-ePZHVD hBKzgZ">leboncoin :</li>
                      <li class="sc-ePZHVD kElKnc">
                        <a
                          href="https://www.avendrealouer.fr"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="AVendreALouer"
                          >AVendreALouer</a
                        >
                      </li>
                      <li class="sc-ePZHVD kElKnc">
                        <a
                          href="https://immobilierneuf.leboncoin.fr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="leboncoin Immobilier Neuf"
                          >leboncoin Immobilier Neuf</a
                        >
                      </li>
                      <li class="sc-ePZHVD kElKnc">
                        <a
                          href="https://www.largus.fr"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="L&#x27;argus"
                          >L&#x27;argus</a
                        >
                      </li>
                      <li class="sc-ePZHVD kElKnc">
                        <a
                          href="https://www.agriaffaires.com#at_medium=custom4&amp;at_campaign=fr_aa_veh_mot_lbc_part_site-footer-autopromo-lbc_______"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Agriaffaires"
                          >Agriaffaires</a
                        >
                      </li>
                      <li class="sc-ePZHVD kElKnc">
                        <a
                          href="https://www.machineryzone.fr#at_medium=custom4&amp;at_campaign=fr_mz_veh_mot_lbc_part_site-footer-autopromo-lbc_______"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="MachineryZone"
                          >MachineryZone</a
                        >
                      </li>
                      <li class="sc-ePZHVD kElKnc">
                        <a
                          href="https://www.truckscorner.fr#at_medium=custom4&amp;at_campaign=fr_tc_veh_mot_lbc_part_site-footer-autopromo-lbc_______"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Truckscorner"
                          >Truckscorner</a
                        >
                      </li>
                      <li class="sc-ePZHVD kElKnc">
                        <a
                          href="https://www.locasun.fr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Locasun - Les locations vacances"
                          >Locasun</a
                        >
                      </li>
                      <li class="sc-ePZHVD kElKnc">
                        <a
                          href="https://www.locasun-vp.fr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Locasun-vp - Ventes privées de locations vacances et weekends"
                          >Locasun-vp</a
                        >
                      </li>
                      <li class="sc-ePZHVD kElKnc">
                        <a
                          href="https://www.videdressing.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Videdressing"
                          >Videdressing</a
                        >
                      </li>
                      <li class="sc-ePZHVD kElKnc">
                        <a
                          href="http://www.ledenicheur.fr"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="LeDénicheur"
                          >LeDénicheur</a
                        >
                      </li>
                      <li class="sc-ePZHVD kElKnc">
                        <a
                          href="http://www.younited-credit.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Younited Credit"
                          >Younited Credit</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div display="flex" class="sc-bdVaJa lnmwDN">
                    <span class="Dqdzf _3j0OU cJtdT"
                      >leboncoin 2006 - 2023</span
                    >
                    <div display="flex" class="sc-bdVaJa sc-fgfRvd caQnMG">
                      <span class="sc-hIVACf fjwXMk">Retrouvez-nous sur</span
                      ><a
                        href="https://www.facebook.com/leboncoin-1565057520410527/"
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        ><svg
                          viewBox="0 0 24 24"
                          role="img"
                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 caKpkk"
                        >
                          <title>facebook</title>
                          <use xlink:href="#SvgFacebook"></use></svg></a
                      ><a
                        href="https://twitter.com/leboncoin/"
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        ><svg
                          viewBox="0 0 24 24"
                          role="img"
                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 caKpkk"
                        >
                          <title>twitter</title>
                          <use xlink:href="#SvgTwitter"></use></svg></a
                      ><a
                        href="https://www.instagram.com/leboncoin/"
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        ><svg
                          viewBox="0 0 24 25"
                          role="img"
                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 caKpkk"
                        >
                          <title>instagram</title>
                          <use xlink:href="#SvgInstagram"></use></svg></a
                      ><a
                        href="https://www.pinterest.fr/leboncoin/"
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        ><svg
                          viewBox="0 0 24 24"
                          role="img"
                          class="sc-bdVaJa src___StyledBox-sc-fochin-0 iIgVqX"
                        >
                          <title>pinterest</title>
                          <use xlink:href="#SvgPinterest"></use></svg
                      ></a>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          <span id="root-portal"></span>
        </div>
        <div class="_3sWzy" data-qa-id="selectedNavigationLayer"></div>
      </div>
      <span hidden="" id="app-type" data-app-type="rav-next"
        >version: 2023-02-09.77036</span
      ><svg height="0" width="0" class="sc-bdVaJa fabXAL">
        <symbol id="SvgHeartoutline">
          <path
            d="M21.19 2.24A6.76 6.76 0 0012 3.61a6.76 6.76 0 00-9.19-1.37A6.89 6.89 0 000 7.58c-.16 4.84 4 8.72 10.26 14.66l.12.12a2.32 2.32 0 003.23 0l.13-.12C20 16.29 24.15 12.41 24 7.57a6.89 6.89 0 00-2.81-5.33zm-9.07 18.15l-.12.12-.12-.12C6.17 15 2.4 11.46 2.4 7.86a4.18 4.18 0 014.2-4.37 4.68 4.68 0 014.28 3h2.25a4.66 4.66 0 014.27-3 4.18 4.18 0 014.2 4.37c0 3.6-3.77 7.14-9.48 12.53z"
          ></path>
        </symbol>
        <symbol id="SvgLeboncoinlogo">
          <path
            d="M58.29 36.625c3.604-.006 5.83-2.864 5.83-7.11 0-4.25-2.22-7.1-5.82-7.1s-5.81 2.84-5.81 7.1c0 4.256 2.206 7.104 5.8 7.11zm2.7-21.1c6.87 0 11.4 5.92 11.5 13.89 0 8.1-4.74 14.1-11.69 14.1a10 10 0 01-8.66-4.63h-.11v4.11h-7.54V6.915c0-2.75 1.83-4.47 4-4.47s4 1.72 4 4.47v12.86h.11a10.212 10.212 0 018.39-4.25zm27.76 21.1c3.61 0 5.81-2.86 5.81-7.11s-2.2-7.1-5.81-7.1c-3.61 0-5.81 2.84-5.81 7.1s2.2 7.11 5.81 7.11zm0-21.1c8.5 0 14 5.81 14 14 0 8.19-5.49 14-14 14s-14-5.81-14-14c0-8.19 5.49-14 14-14zm106.85 0c2.2 0 4.03 1.72 4.07 4.47v23h-8.07v-23c0-2.75 1.79-4.47 4-4.47zm0-14.05a4.9 4.9 0 010 9.8h-.002a4.9 4.9 0 11.003-9.8zm25.24 14.05c5.6 0 8.61 3.98 8.61 10.01v17.46h-8.07v-15.2c0-3.55-1.67-4.73-3.77-4.73-3.12 0-5.49 2.63-5.49 8.23v11.7h-8.07v-23.25c0-2.64 1.73-4.2 3.77-4.2s3.76 1.56 3.76 4.2v1h.11a10.637 10.637 0 019.15-5.22zm-46.67 21.1c3.61 0 5.82-2.86 5.82-7.11s-2.219-7.1-5.82-7.1c-3.6 0-5.81 2.84-5.81 7.1s2.21 7.11 5.81 7.11zm0-21.1c8.511 0 14 5.81 14 14 0 8.19-5.489 14-14 14-8.51 0-14-5.81-14-14 0-8.19 5.5-14 14-14zm-25.94 7c-3.5 0-5.65 2.58-5.65 7s2.15 7 5.65 7a5.407 5.407 0 004.9-2.69h.1l5.87 3.77c-2.04 3.98-6.3 5.92-11.14 5.92-8.4 0-13.57-5.81-13.57-14 0-8.19 5.17-14 13.57-14 4.84 0 9.14 1.92 11.14 5.92l-5.87 3.77h-.1a5.406 5.406 0 00-4.9-2.69zm-25.46-7c5.6 0 8.61 3.98 8.63 10.01v17.46h-8.07v-15.2c0-3.55-1.67-4.73-3.77-4.73-3.12 0-5.49 2.63-5.49 8.23v11.7h-8.08v-23.27c0-2.64 1.7-4.18 3.75-4.18s3.77 1.56 3.77 4.2v1h.11a10.627 10.627 0 019.15-5.22zm-100.23 12.4a9.966 9.966 0 00.54 3.01l9-6.67a4.48 4.48 0 00-4.12-2.34c-2.55 0-5.42 1.92-5.42 6zm7.82 9a8.32 8.32 0 006.89-4.44l5.31 3.84c-2.03 4.13-6.17 7.19-13.17 7.19a13.68 13.68 0 01-9-3.4c-3.52 2.34-6.52 3.34-9.52 3.34-6.05 0-10.32-4.05-10.32-10.13V6.845c0-2.74 1.82-4.46 4-4.46 2.18 0 4 1.72 4 4.46v25.81c0 2.6 1.14 4 3.53 4 1.3 0 2.71-.75 4.54-1.75a16.647 16.647 0 01-1.3-6.57c0-5.71 4.07-12.81 12.62-12.81 7.41 0 11.39 4.31 13.05 9.72l-14.27 10.24a5.181 5.181 0 003.64 1.44z"
            fill-rule="evenodd"
          ></path>
        </symbol>
        <symbol id="SvgMessageoutline">
          <path
            d="M18 12h-7.2a1.13 1.13 0 00-1.2 1.2 1.13 1.13 0 001.2 1.2H18a1.2 1.2 0 000-2.4zM6 7.2h12A1.13 1.13 0 0019.2 6 1.13 1.13 0 0018 4.8H6a1.2 1.2 0 000 2.4z"
          ></path>
          <path
            d="M21.6 0H2.4A2.41 2.41 0 000 2.4v14.4a2.41 2.41 0 002.4 2.4h16.8L24 24V2.4A2.41 2.41 0 0021.6 0zm0 18.24l-1.44-1.44H2.4V2.4h19.2z"
          ></path>
          <path
            d="M6 10.8h12a1.13 1.13 0 001.2-1.2A1.13 1.13 0 0018 8.4H6a1.2 1.2 0 100 2.4z"
          ></path>
        </symbol>
        <symbol id="SvgNotificationoutline">
          <path
            d="M12 24a2.49 2.49 0 002.5-2.46h-5A2.48 2.48 0 0012 24zM21.13 18.2l-1.62-1.58v-6.16c0-3.78-2.05-6.94-5.63-7.78v-.83a1.88 1.88 0 00-3.76 0v.83c-3.59.84-5.63 4-5.63 7.78v6.16L2.87 18.2a1.23 1.23 0 00.88 2.11h16.49a1.23 1.23 0 00.89-2.11zM17 17.85H7v-7.39c0-3.05 1.89-5.54 5-5.54s5 2.49 5 5.54z"
          ></path>
        </symbol>
        <symbol id="SvgSearch">
          <path
            d="M23.58 21.45l-7-7a9.42 9.42 0 001.62-6.87A9.13 9.13 0 0010.34.07a9.25 9.25 0 00-2.81 18.27 9.25 9.25 0 007-1.76l7 7a1.54 1.54 0 002.11 0 1.56 1.56 0 00-.06-2.13zM9.22 15.5a6.37 6.37 0 116.33-6.37 6.33 6.33 0 01-6.33 6.37z"
          ></path>
        </symbol>
      </svg>
    </div>
    <script id="__NEXT_DATA__" type="application/json" crossorigin="anonymous">
      {
        "props": {
          "pageProps": {
            "searchObject": {
              "limit": 35,
              "limit_alu": 3,
              "limit_sponsored": 1,
              "sort_by": "relevance",
              "sort_order": "desc",
              "filters": {
                "enums": { "ad_type": ["offer"] },
                "keywords": { "text": "iphone 14" }
              }
            },
            "searchData": {
              "total": 9465,
              "total_all": 9465,
              "total_pro": 592,
              "total_private": 8873,
              "total_active": 0,
              "total_inactive": 0,
              "total_shippable": 0,
              "max_pages": 100,
              "referrer_id": "aecdc148-ad0d-4e0e-858c-db0aadcd9bb7",
              "pivot": "{\"ids_to_display\":[\"2292560874\",\"2294773909\",\"2296047867\",\"2297869800\",\"2277824702\",\"2296847705\",\"2297363744\",\"2294903075\",\"2298338771\",\"2289866597\",\"2297103030\",\"2284092161\",\"2281811289\",\"2297928945\",\"2297908055\",\"2293798871\",\"2284594482\",\"2287195801\",\"2296742979\",\"2297180027\",\"2297703702\",\"2283220713\",\"2297452609\",\"2286561710\",\"2292132819\",\"2286787573\",\"2279830000\",\"2297780256\",\"2282746948\",\"2295963375\",\"2298375848\",\"2283780898\",\"2274525573\",\"2295346161\",\"2278214949\",\"2295640614\",\"2297955300\",\"2297266414\",\"2280126624\",\"2289006692\",\"2298184280\",\"2280332488\",\"2286647490\",\"2287927346\",\"2295297711\",\"2293587325\",\"2297967757\",\"2287760819\",\"2298191163\",\"2297629950\",\"2274455136\",\"2298227565\",\"2281558094\",\"2281313570\",\"2295322257\",\"2282216104\",\"2292783868\",\"2274706630\",\"2298290274\",\"2295052551\",\"2275445195\",\"2282501923\",\"2279701954\",\"2289358469\",\"2298078061\",\"2297722147\",\"2298252967\",\"2298056343\",\"2297888539\",\"2277072053\",\"2287994301\",\"2294887380\",\"2292680825\",\"2291262934\",\"2295798722\",\"2294565314\",\"2294909126\",\"2294760778\",\"2282423427\",\"2298145023\",\"2288121879\",\"2292969847\",\"2297350371\",\"2289786452\",\"2287047198\",\"2296643694\",\"2298010162\",\"2296675924\",\"2297987100\",\"2290206693\",\"2298019146\",\"2295310633\",\"2298175877\",\"2275312716\",\"2298233935\",\"2293895021\",\"2279134039\",\"2287994873\",\"2294310233\",\"2297956819\",\"2281403620\",\"2295255988\",\"2297909696\",\"2297941521\",\"2297754577\",\"2282854078\",\"2286765852\",\"2274542121\",\"2286046490\",\"2298360364\",\"2276164639\",\"2286746273\",\"2298328776\",\"2298345411\",\"2297986930\",\"2297511092\",\"2288083706\",\"2292210302\",\"2297953488\",\"2275994762\",\"2297932693\",\"2298127629\",\"2273775220\",\"2297676439\",\"2296805947\",\"2292607408\",\"2282841967\",\"2273474562\",\"2278043866\",\"2294651844\",\"2297100775\",\"2297774915\",\"2269819648\",\"2296664921\",\"2297968780\",\"2282745454\",\"2280074882\",\"2286107941\",\"2286614100\",\"2292056979\",\"2286977094\",\"2297962771\",\"2290658238\",\"2285707547\",\"2298350673\",\"2297652102\",\"2296210462\",\"2297839761\",\"2298349714\",\"2284271280\",\"2287015523\",\"2291293744\",\"2290385309\",\"2286481426\",\"2284587509\",\"2270935894\",\"2295443182\",\"2287701310\",\"2297283828\",\"2293020388\",\"2288514300\",\"2297270593\",\"2275564471\",\"2298239404\",\"2277355907\",\"2292006992\",\"2297842942\",\"2276740386\",\"2298145125\",\"2284790203\",\"2283765868\",\"2297815299\",\"2296994739\",\"2271014365\",\"2281911998\",\"2298307563\",\"2295566355\",\"2288157613\",\"2296932613\",\"2298068491\",\"2295464569\",\"2297639253\",\"2293057082\",\"2288933496\",\"2292991778\",\"2283314264\",\"2294102526\",\"2297573275\",\"2270014866\",\"2277946657\",\"2297114351\",\"2292217159\",\"2294574132\",\"2297701933\",\"2296319848\",\"2295124800\",\"2295263083\",\"2292656225\",\"2286496869\",\"2275306115\",\"2298214889\",\"2296675065\",\"2295901457\",\"2296100419\",\"2297951301\",\"2287683366\",\"2296661225\",\"2296528525\",\"2291902654\",\"2298233855\",\"2298029351\",\"2295343898\",\"2297141315\",\"2296264119\",\"2291647885\",\"2291306549\",\"2291366821\",\"2290734001\",\"2296495907\",\"2292800709\",\"2296932055\",\"2294795369\",\"2295649205\",\"2289409510\",\"2297431994\",\"2286443690\",\"2297691869\",\"2286693129\",\"2286678407\",\"2282735323\",\"2298112030\",\"2275022239\",\"2267255394\",\"2296367371\",\"2294750925\",\"2278876479\",\"2298271344\",\"2280006395\",\"2259702707\",\"2294949738\",\"2273004763\",\"2284060681\",\"2298045837\",\"2295080834\",\"2297771068\",\"2295098649\",\"2297386145\",\"2297579506\",\"2294792590\",\"2292488076\",\"2293635588\",\"2297068051\",\"2293873446\",\"2291455993\",\"2296196944\",\"2275783843\",\"2297835164\",\"2290353351\",\"2298324464\",\"2278573057\",\"2296268225\",\"2284200212\",\"2271948279\",\"2294769271\",\"2287678549\",\"2297488744\",\"2279163346\",\"2295856573\",\"2295553769\",\"2297975563\",\"2295923991\",\"2298171629\",\"2292236721\",\"2296224758\",\"2294803247\",\"2297145246\",\"2297126655\",\"2286275043\",\"2286270754\",\"2292890899\",\"2298281765\",\"2297630553\",\"2296700940\",\"2287291299\",\"2280743827\",\"2297697379\",\"2283680651\",\"2294559380\",\"2297546958\",\"2296786250\",\"2286070924\",\"2283638905\",\"2296604594\",\"2297902508\",\"2297520352\",\"2274444280\",\"2295761063\",\"2296585477\",\"2296518934\",\"2298312760\",\"2297882042\",\"2298099652\",\"2296389898\",\"2294673486\",\"2296609764\",\"2292897694\",\"2297790551\",\"2296655691\",\"2292435397\",\"2289578645\",\"2297797582\",\"2296781416\",\"2293528980\",\"2290781531\",\"2296766365\",\"2294592126\",\"2295848173\",\"2288770026\",\"2293795139\",\"2292877304\",\"2267649398\",\"2298365462\",\"2271458980\",\"2297687443\",\"2291446649\",\"2273300510\",\"2286797285\",\"2280195958\",\"2296472562\",\"2279689596\",\"2295157132\",\"2270651786\",\"2298267695\",\"2295347760\",\"2295850629\",\"2297072339\",\"2270790333\",\"2294038476\",\"2283911455\",\"2293846784\",\"2295814736\",\"2297465242\",\"2297646302\",\"2296195637\",\"2296915187\",\"2298209894\",\"2291992619\",\"2298219243\",\"2298296599\",\"2295820468\",\"2295182379\",\"2298259695\",\"2270312926\",\"2296025348\",\"2284090430\",\"2287205519\",\"2298176088\",\"2297240049\",\"2294134616\",\"2296202949\",\"2296921409\",\"2297577733\",\"2295210224\",\"2272232412\",\"2295056495\",\"2296194410\",\"2294445363\",\"2296716445\",\"2296096045\",\"2292625013\",\"2276379930\",\"2291523071\",\"2297833470\",\"2297968534\",\"2297946504\",\"2298178487\",\"2296819000\",\"2287756466\",\"2286747395\",\"2296144422\",\"2280492360\",\"2296052965\",\"2297698376\",\"2297583683\",\"2297380148\",\"2297986668\",\"2296939386\",\"2297098825\",\"2296140114\",\"2292211493\",\"2287731105\",\"2281599682\",\"2263904999\",\"2296773140\",\"2294274305\",\"2283292863\",\"2297584975\",\"2284026455\",\"2297222651\",\"2267765542\",\"2291673615\",\"2273999910\",\"2276248062\",\"2296043320\",\"2293348042\",\"2283627819\",\"2296059207\",\"2296835690\",\"2296408413\",\"2295334958\",\"2294374961\",\"2296990317\",\"2298383678\",\"2291504975\",\"2296255260\",\"2296125472\",\"2293673916\",\"2295849020\",\"2296107362\",\"2289507199\"],\"es_pivot\":\"29.13126|-62135596800000\",\"reranker_offset\":35,\"total\":9465,\"page_number\":1}",
              "ads": [
                {
                  "list_id": 2292560874,
                  "first_publication_date": "2023-01-29 14:47:12",
                  "index_date": "2023-02-09 18:01:06",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 pro max trouver",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2292560874.htm",
                  "price": [0],
                  "price_cents": 0,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=ad-small",
                    "nb_images": 1,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/67/8a/a2/678aa29c16911f08bce97287301885406f31ae00.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/9df33e37-3ca1-5038-80ea-0bb1a016fc69?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/9df33e37-3ca1-5038-80ea-0bb1a016fc69?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/9df33e37-3ca1-5038-80ea-0bb1a016fc69?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "576",
                      "values": ["576"],
                      "value_label": "576",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14promax",
                      "values": ["iphone14promax"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14 Pro Max",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "violet",
                      "values": ["violet"],
                      "key_label": "Couleur",
                      "value_label": "Violet",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "256go",
                      "values": ["256go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "256 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "colissimo", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "1",
                      "values": ["1"],
                      "value_label": "1",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "22",
                    "region_name": "Rhône-Alpes",
                    "department_id": "69",
                    "department_name": "Rhône",
                    "city_label": "Sainte-Foy-lès-Lyon 69110",
                    "city": "Sainte-Foy-lès-Lyon",
                    "zipcode": "69110",
                    "lat": 45.73587,
                    "lng": 4.80493,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [4.80493, 45.73587]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "66080357",
                    "user_id": "511df977-1a56-4a90-a975-2b1e8ea7a90f",
                    "type": "private",
                    "name": "Oussama69",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2294773909,
                  "first_publication_date": "2023-02-02 21:05:35",
                  "index_date": "2023-02-02 21:05:35",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 PRO",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2294773909.htm",
                  "price": [0],
                  "price_cents": 0,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/6b/89/5a/6b895a14aa5bd41a75d7a6b24040f6f25b930798.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/6b/89/5a/6b895a14aa5bd41a75d7a6b24040f6f25b930798.jpg?rule=ad-small",
                    "nb_images": 1,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/6b/89/5a/6b895a14aa5bd41a75d7a6b24040f6f25b930798.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/6b/89/5a/6b895a14aa5bd41a75d7a6b24040f6f25b930798.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/6b/89/5a/6b895a14aa5bd41a75d7a6b24040f6f25b930798.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "rating_score",
                      "value": "1",
                      "values": ["1"],
                      "value_label": "1",
                      "generic": false
                    },
                    {
                      "key": "rating_count",
                      "value": "5",
                      "values": ["5"],
                      "value_label": "5",
                      "generic": false
                    },
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/5bfe0e4b-22c5-58cb-9645-26d37fcb69fc?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/5bfe0e4b-22c5-58cb-9645-26d37fcb69fc?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/5bfe0e4b-22c5-58cb-9645-26d37fcb69fc?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "666",
                      "values": ["666"],
                      "value_label": "666",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "tresbonetat",
                      "values": ["tresbonetat"],
                      "key_label": "État",
                      "value_label": "Très bon état",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14pro",
                      "values": ["iphone14pro"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14 Pro",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "13",
                    "region_name": "Languedoc-Roussillon",
                    "department_id": "11",
                    "department_name": "Aude",
                    "city_label": "Narbonne 11100",
                    "city": "Narbonne",
                    "zipcode": "11100",
                    "lat": 43.18835,
                    "lng": 3.00432,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [3.00432, 43.18835]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "60242403",
                    "user_id": "4c39b28e-9803-4c96-ad11-fdb6d7a9bb28",
                    "type": "private",
                    "name": "aurelie",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2296047867,
                  "first_publication_date": "2023-02-05 12:47:43",
                  "index_date": "2023-02-05 12:47:43",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2296047867.htm",
                  "price": [830],
                  "price_cents": 83000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/25/90/b8/2590b87237cc26520ac090e2118aea1566dfb62f.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/25/90/b8/2590b87237cc26520ac090e2118aea1566dfb62f.jpg?rule=ad-small",
                    "nb_images": 3,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/25/90/b8/2590b87237cc26520ac090e2118aea1566dfb62f.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/1a/48/07/1a48070547fb3da08678c89adacbe639da8b7bd1.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/11/fe/29/11fe29cc7f12e6bb09a95465e0ea0eb9732bcb20.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/25/90/b8/2590b87237cc26520ac090e2118aea1566dfb62f.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/1a/48/07/1a48070547fb3da08678c89adacbe639da8b7bd1.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/11/fe/29/11fe29cc7f12e6bb09a95465e0ea0eb9732bcb20.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/25/90/b8/2590b87237cc26520ac090e2118aea1566dfb62f.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/1a/48/07/1a48070547fb3da08678c89adacbe639da8b7bd1.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/11/fe/29/11fe29cc7f12e6bb09a95465e0ea0eb9732bcb20.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "rating_score",
                      "value": "1",
                      "values": ["1"],
                      "value_label": "1",
                      "generic": false
                    },
                    {
                      "key": "rating_count",
                      "value": "9",
                      "values": ["9"],
                      "value_label": "9",
                      "generic": false
                    },
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/c2b50ef2-850f-55d5-91b5-dbd7e457ab66?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/c2b50ef2-850f-55d5-91b5-dbd7e457ab66?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/c2b50ef2-850f-55d5-91b5-dbd7e457ab66?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "649",
                      "values": ["649"],
                      "value_label": "649",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "old_price",
                      "value": "850",
                      "values": ["850"],
                      "value_label": "850",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "95",
                    "department_name": "Val-d'Oise",
                    "city_label": "Pontoise 95300",
                    "city": "Pontoise",
                    "zipcode": "95300",
                    "lat": 49.05061,
                    "lng": 2.1006,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.1006, 49.05061]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "32209685",
                    "user_id": "94a65844-0603-4aa7-843d-0ca6ddc89f96",
                    "type": "private",
                    "name": "Giodu95",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2297869800,
                  "first_publication_date": "2023-02-08 19:07:57",
                  "index_date": "2023-02-08 19:07:57",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 pro",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2297869800.htm",
                  "price": [1100],
                  "price_cents": 110000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/2e/b3/37/2eb33720265da4b9186bd99c2c3535801e000708.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/2e/b3/37/2eb33720265da4b9186bd99c2c3535801e000708.jpg?rule=ad-small",
                    "nb_images": 1,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/2e/b3/37/2eb33720265da4b9186bd99c2c3535801e000708.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/2e/b3/37/2eb33720265da4b9186bd99c2c3535801e000708.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/2e/b3/37/2eb33720265da4b9186bd99c2c3535801e000708.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/2bbbad83-2bab-5acc-a93f-1a2c5943f4c6?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/2bbbad83-2bab-5acc-a93f-1a2c5943f4c6?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/2bbbad83-2bab-5acc-a93f-1a2c5943f4c6?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "888",
                      "values": ["888"],
                      "value_label": "888",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14pro",
                      "values": ["iphone14pro"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14 Pro",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "violet",
                      "values": ["violet"],
                      "key_label": "Couleur",
                      "value_label": "Violet",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "75",
                    "department_name": "Paris",
                    "city_label": "Paris 75015 15e Arrondissement",
                    "city": "Paris",
                    "zipcode": "75015",
                    "lat": 48.84105,
                    "lng": 2.29926,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.29926, 48.84105]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "66717354",
                    "user_id": "75192e46-cf7e-415b-bdad-064088539256",
                    "type": "private",
                    "name": "Didou",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2277824702,
                  "first_publication_date": "2022-12-30 20:42:04",
                  "index_date": "2023-02-09 18:06:06",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 neuf",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2277824702.htm",
                  "price": [849],
                  "price_cents": 84900,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/76/9e/94/769e941e427c9c2cca598c64b5c1159a2a225f37.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/76/9e/94/769e941e427c9c2cca598c64b5c1159a2a225f37.jpg?rule=ad-small",
                    "nb_images": 1,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/76/9e/94/769e941e427c9c2cca598c64b5c1159a2a225f37.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/76/9e/94/769e941e427c9c2cca598c64b5c1159a2a225f37.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/76/9e/94/769e941e427c9c2cca598c64b5c1159a2a225f37.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/e1ae408d-b36b-5c2d-bca7-5d94efb1d272?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/e1ae408d-b36b-5c2d-bca7-5d94efb1d272?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/e1ae408d-b36b-5c2d-bca7-5d94efb1d272?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "656",
                      "values": ["656"],
                      "value_label": "656",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "old_price",
                      "value": "950",
                      "values": ["950"],
                      "value_label": "950",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "21",
                    "region_name": "Provence-Alpes-Côte d'Azur",
                    "department_id": "13",
                    "department_name": "Bouches-du-Rhône",
                    "city_label": "Les Pennes-Mirabeau 13170",
                    "city": "Les Pennes-Mirabeau",
                    "zipcode": "13170",
                    "lat": 43.41606,
                    "lng": 5.36091,
                    "source": "address",
                    "provider": "here",
                    "is_shape": false,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [5.36091, 43.41606]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "2516005",
                    "user_id": "a953bca8-8c92-4680-8d3f-fd386417b752",
                    "type": "private",
                    "name": "djiss",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2296847705,
                  "first_publication_date": "2023-02-06 18:15:04",
                  "index_date": "2023-02-06 18:15:04",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2296847705.htm",
                  "price": [820],
                  "price_cents": 82000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/69/2d/2d/692d2d49dcb8c915d326fe96e55f6f06ca6d8d62.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/69/2d/2d/692d2d49dcb8c915d326fe96e55f6f06ca6d8d62.jpg?rule=ad-small",
                    "nb_images": 4,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/69/2d/2d/692d2d49dcb8c915d326fe96e55f6f06ca6d8d62.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/27/a3/3b/27a33b4e7cc5beec9e47c07b714965db2d7c2a78.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/7f/ee/65/7fee65b9f14a7ca17c250112fe5b32f4a9e93399.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ff/f8/ed/fff8edca82276ab6c3c962606f9d2a15c241ebf2.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/69/2d/2d/692d2d49dcb8c915d326fe96e55f6f06ca6d8d62.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/27/a3/3b/27a33b4e7cc5beec9e47c07b714965db2d7c2a78.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/7f/ee/65/7fee65b9f14a7ca17c250112fe5b32f4a9e93399.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ff/f8/ed/fff8edca82276ab6c3c962606f9d2a15c241ebf2.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/69/2d/2d/692d2d49dcb8c915d326fe96e55f6f06ca6d8d62.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/27/a3/3b/27a33b4e7cc5beec9e47c07b714965db2d7c2a78.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/7f/ee/65/7fee65b9f14a7ca17c250112fe5b32f4a9e93399.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ff/f8/ed/fff8edca82276ab6c3c962606f9d2a15c241ebf2.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/6aea88f4-50d6-5394-9478-aed0a215da8b?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/6aea88f4-50d6-5394-9478-aed0a215da8b?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/6aea88f4-50d6-5394-9478-aed0a215da8b?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "649",
                      "values": ["649"],
                      "value_label": "649",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "bleu",
                      "values": ["bleu"],
                      "key_label": "Couleur",
                      "value_label": "Bleu",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "75",
                    "department_name": "Paris",
                    "city_label": "Paris 75017 17e Arrondissement",
                    "city": "Paris",
                    "zipcode": "75017",
                    "lat": 48.88387,
                    "lng": 2.31863,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.31863, 48.88387]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "34612490",
                    "user_id": "d9b653dd-d03f-451d-90fc-913e248f31f2",
                    "type": "private",
                    "name": "Maiknt",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2297363744,
                  "first_publication_date": "2023-02-07 18:41:41",
                  "index_date": "2023-02-07 18:41:41",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 neuf 128gb",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2297363744.htm",
                  "price": [800],
                  "price_cents": 80000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/9a/60/68/9a6068abdf84dfd9711e2071cb4460b9fed06866.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/9a/60/68/9a6068abdf84dfd9711e2071cb4460b9fed06866.jpg?rule=ad-small",
                    "nb_images": 4,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/9a/60/68/9a6068abdf84dfd9711e2071cb4460b9fed06866.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b2/db/01/b2db01722cc70dc1584d1c1e2858c5e1096e8518.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/90/50/1c/90501c2f50395c01cd6b8c84d7733823607e5a9c.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/14/f5/f8/14f5f8cd20501c0537c8318544b2fb31013704aa.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/9a/60/68/9a6068abdf84dfd9711e2071cb4460b9fed06866.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b2/db/01/b2db01722cc70dc1584d1c1e2858c5e1096e8518.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/90/50/1c/90501c2f50395c01cd6b8c84d7733823607e5a9c.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/14/f5/f8/14f5f8cd20501c0537c8318544b2fb31013704aa.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/9a/60/68/9a6068abdf84dfd9711e2071cb4460b9fed06866.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b2/db/01/b2db01722cc70dc1584d1c1e2858c5e1096e8518.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/90/50/1c/90501c2f50395c01cd6b8c84d7733823607e5a9c.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/14/f5/f8/14f5f8cd20501c0537c8318544b2fb31013704aa.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/50cc4086-97ea-5359-aa4e-9edef2be7213?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/50cc4086-97ea-5359-aa4e-9edef2be7213?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/50cc4086-97ea-5359-aa4e-9edef2be7213?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "649",
                      "values": ["649"],
                      "value_label": "649",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14pro",
                      "values": ["iphone14pro"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14 Pro",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "blanc",
                      "values": ["blanc"],
                      "key_label": "Couleur",
                      "value_label": "Blanc",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "22",
                    "region_name": "Rhône-Alpes",
                    "department_id": "69",
                    "department_name": "Rhône",
                    "city_label": "Villeurbanne 69100",
                    "city": "Villeurbanne",
                    "zipcode": "69100",
                    "lat": 45.76962,
                    "lng": 4.87898,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [4.87898, 45.76962]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "66942167",
                    "user_id": "434a1435-8d58-4e6c-b7d2-3cbd55ea91c1",
                    "type": "private",
                    "name": "Leroy",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2294903075,
                  "first_publication_date": "2023-02-03 10:03:38",
                  "index_date": "2023-02-03 10:03:38",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 Rouge",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2294903075.htm",
                  "price": [700],
                  "price_cents": 70000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/2e/5e/10/2e5e1043a60e0317b166fbd109185c58c1e118d6.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/2e/5e/10/2e5e1043a60e0317b166fbd109185c58c1e118d6.jpg?rule=ad-small",
                    "nb_images": 2,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/2e/5e/10/2e5e1043a60e0317b166fbd109185c58c1e118d6.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/d9/b7/5b/d9b75bda27ca17e933e97752b85baba8ea0c1177.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/2e/5e/10/2e5e1043a60e0317b166fbd109185c58c1e118d6.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/d9/b7/5b/d9b75bda27ca17e933e97752b85baba8ea0c1177.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/2e/5e/10/2e5e1043a60e0317b166fbd109185c58c1e118d6.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/d9/b7/5b/d9b75bda27ca17e933e97752b85baba8ea0c1177.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/3c0e5059-ef57-5f83-8fd7-73da3f1e2363?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/3c0e5059-ef57-5f83-8fd7-73da3f1e2363?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/3c0e5059-ef57-5f83-8fd7-73da3f1e2363?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "652",
                      "values": ["652"],
                      "value_label": "652",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "rouge",
                      "values": ["rouge"],
                      "key_label": "Couleur",
                      "value_label": "Rouge",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "22",
                    "region_name": "Rhône-Alpes",
                    "department_id": "69",
                    "department_name": "Rhône",
                    "city_label": "Lyon 69007 7e Arrondissement",
                    "city": "Lyon",
                    "zipcode": "69007",
                    "lat": 45.74666,
                    "lng": 4.84244,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [4.84244, 45.74666]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "29888546",
                    "user_id": "e764ea3a-af92-448c-b408-de051d9a8eac",
                    "type": "private",
                    "name": "hazuno38",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2298338771,
                  "first_publication_date": "2023-02-09 19:13:31",
                  "index_date": "2023-02-09 19:13:31",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 blanc neuf sous scellé",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2298338771.htm",
                  "price": [800],
                  "price_cents": 80000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/c3/74/6b/c3746b10f295d590808922c972702d4efe14eea4.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/c3/74/6b/c3746b10f295d590808922c972702d4efe14eea4.jpg?rule=ad-small",
                    "nb_images": 2,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/c3/74/6b/c3746b10f295d590808922c972702d4efe14eea4.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/43/73/90/437390755118888630750994e5d2cbc7fd4d2d04.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/c3/74/6b/c3746b10f295d590808922c972702d4efe14eea4.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/43/73/90/437390755118888630750994e5d2cbc7fd4d2d04.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/c3/74/6b/c3746b10f295d590808922c972702d4efe14eea4.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/43/73/90/437390755118888630750994e5d2cbc7fd4d2d04.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/811dc35c-81da-5c2e-a2fd-9823e39a8e6c?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/811dc35c-81da-5c2e-a2fd-9823e39a8e6c?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/811dc35c-81da-5c2e-a2fd-9823e39a8e6c?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "615",
                      "values": ["615"],
                      "value_label": "615",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "blanc",
                      "values": ["blanc"],
                      "key_label": "Couleur",
                      "value_label": "Blanc",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "92",
                    "department_name": "Hauts-de-Seine",
                    "city_label": "Gennevilliers 92230",
                    "city": "Gennevilliers",
                    "zipcode": "92230",
                    "lat": 48.92502,
                    "lng": 2.29446,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.29446, 48.92502]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "10968711",
                    "user_id": "64c8f457-3603-46ef-84e5-471b21db503a",
                    "type": "private",
                    "name": "Nedmel",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2289866597,
                  "first_publication_date": "2023-01-23 22:20:14",
                  "index_date": "2023-02-09 08:04:16",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2289866597.htm",
                  "price": [950],
                  "price_cents": 95000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/7c/6b/f2/7c6bf2056cc3dd6d5c79d3963e5e422c196a06d6.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/7c/6b/f2/7c6bf2056cc3dd6d5c79d3963e5e422c196a06d6.jpg?rule=ad-small",
                    "nb_images": 2,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/7c/6b/f2/7c6bf2056cc3dd6d5c79d3963e5e422c196a06d6.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/43/25/fb/4325fb59cbf39471defb70094d3760782a971d4c.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/7c/6b/f2/7c6bf2056cc3dd6d5c79d3963e5e422c196a06d6.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/43/25/fb/4325fb59cbf39471defb70094d3760782a971d4c.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/7c/6b/f2/7c6bf2056cc3dd6d5c79d3963e5e422c196a06d6.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/43/25/fb/4325fb59cbf39471defb70094d3760782a971d4c.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/786e05de-f6c5-59f3-ad7a-8c148759fb3c?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/786e05de-f6c5-59f3-ad7a-8c148759fb3c?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/786e05de-f6c5-59f3-ad7a-8c148759fb3c?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "652",
                      "values": ["652"],
                      "value_label": "652",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14plus",
                      "values": ["iphone14plus"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14 Plus",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "violet",
                      "values": ["violet"],
                      "key_label": "Couleur",
                      "value_label": "Violet",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "7",
                    "region_name": "Centre",
                    "department_id": "28",
                    "department_name": "Eure-et-Loir",
                    "city_label": "Dreux 28100",
                    "city": "Dreux",
                    "zipcode": "28100",
                    "lat": 48.73611,
                    "lng": 1.36228,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [1.36228, 48.73611]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "67076295",
                    "user_id": "e1ecfb4e-2358-44f7-85ae-b512b31cba8e",
                    "type": "private",
                    "name": "Nabil",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2297103030,
                  "first_publication_date": "2023-02-07 11:00:18",
                  "index_date": "2023-02-07 11:00:18",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 noir 128gb",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2297103030.htm",
                  "price": [750],
                  "price_cents": 75000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/2d/64/fe/2d64fefe8239dede28876b363396faf4c0fc28d8.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/2d/64/fe/2d64fefe8239dede28876b363396faf4c0fc28d8.jpg?rule=ad-small",
                    "nb_images": 3,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/2d/64/fe/2d64fefe8239dede28876b363396faf4c0fc28d8.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/57/e8/83/57e8830a51898949ee9ed80dda5abd81bf8626a5.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/03/2d/57/032d5702846dfd6a0fa186d596355fe63a52aa3e.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/2d/64/fe/2d64fefe8239dede28876b363396faf4c0fc28d8.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/57/e8/83/57e8830a51898949ee9ed80dda5abd81bf8626a5.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/03/2d/57/032d5702846dfd6a0fa186d596355fe63a52aa3e.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/2d/64/fe/2d64fefe8239dede28876b363396faf4c0fc28d8.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/57/e8/83/57e8830a51898949ee9ed80dda5abd81bf8626a5.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/03/2d/57/032d5702846dfd6a0fa186d596355fe63a52aa3e.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/31a994fd-7a60-543a-9e40-ac1082fa4f85?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/31a994fd-7a60-543a-9e40-ac1082fa4f85?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/31a994fd-7a60-543a-9e40-ac1082fa4f85?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "631",
                      "values": ["631"],
                      "value_label": "631",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "old_price",
                      "value": "850",
                      "values": ["850"],
                      "value_label": "850",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "94",
                    "department_name": "Val-de-Marne",
                    "city_label": "Bry-sur-Marne 94360",
                    "city": "Bry-sur-Marne",
                    "zipcode": "94360",
                    "lat": 48.83454,
                    "lng": 2.5196,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.5196, 48.83454]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "67251705",
                    "user_id": "83050d8c-9b08-4f7a-8767-3e51bbc07a83",
                    "type": "private",
                    "name": "Antoine",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2284092161,
                  "first_publication_date": "2023-01-12 21:50:48",
                  "index_date": "2023-02-09 11:14:09",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2284092161.htm",
                  "price": [950],
                  "price_cents": 95000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/4e/f1/89/4ef1892aaf8e0045622127c1558e9f40e626e50d.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/4e/f1/89/4ef1892aaf8e0045622127c1558e9f40e626e50d.jpg?rule=ad-small",
                    "nb_images": 3,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/4e/f1/89/4ef1892aaf8e0045622127c1558e9f40e626e50d.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/f1/1a/bd/f11abd66dae7fc274fec914d83e8577762dc9b22.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/aa/41/9a/aa419a3fac3e1091b2ca4eae3de09407a9a73dd1.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/4e/f1/89/4ef1892aaf8e0045622127c1558e9f40e626e50d.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/f1/1a/bd/f11abd66dae7fc274fec914d83e8577762dc9b22.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/aa/41/9a/aa419a3fac3e1091b2ca4eae3de09407a9a73dd1.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/4e/f1/89/4ef1892aaf8e0045622127c1558e9f40e626e50d.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/f1/1a/bd/f11abd66dae7fc274fec914d83e8577762dc9b22.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/aa/41/9a/aa419a3fac3e1091b2ca4eae3de09407a9a73dd1.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/d9b1ee44-e6ab-50e3-9da5-4d757979a93b?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/d9b1ee44-e6ab-50e3-9da5-4d757979a93b?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/d9b1ee44-e6ab-50e3-9da5-4d757979a93b?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "652",
                      "values": ["652"],
                      "value_label": "652",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "22",
                    "region_name": "Rhône-Alpes",
                    "department_id": "26",
                    "department_name": "Drôme",
                    "city_label": "Montélimar 26200",
                    "city": "Montélimar",
                    "zipcode": "26200",
                    "lat": 44.55578,
                    "lng": 4.74897,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [4.74897, 44.55578]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "58436503",
                    "user_id": "86677204-d6f6-4913-8ac5-c2b3fc7055c4",
                    "type": "private",
                    "name": "nicu",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2281811289,
                  "first_publication_date": "2023-01-08 13:20:34",
                  "index_date": "2023-02-09 17:14:09",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2281811289.htm",
                  "price": [900],
                  "price_cents": 90000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/d3/6f/76/d36f769e7dec40cda159d0e9145ef485a024af71.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/d3/6f/76/d36f769e7dec40cda159d0e9145ef485a024af71.jpg?rule=ad-small",
                    "nb_images": 3,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/d3/6f/76/d36f769e7dec40cda159d0e9145ef485a024af71.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ef/8e/a4/ef8ea4390b3386d3736436617e2d754e10d5bc7c.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/45/68/e8/4568e8a00528e65296e3a41fdf71b887aa4c66ba.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/d3/6f/76/d36f769e7dec40cda159d0e9145ef485a024af71.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ef/8e/a4/ef8ea4390b3386d3736436617e2d754e10d5bc7c.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/45/68/e8/4568e8a00528e65296e3a41fdf71b887aa4c66ba.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/d3/6f/76/d36f769e7dec40cda159d0e9145ef485a024af71.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ef/8e/a4/ef8ea4390b3386d3736436617e2d754e10d5bc7c.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/45/68/e8/4568e8a00528e65296e3a41fdf71b887aa4c66ba.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/fa6a5b20-16d0-5b48-9607-e490cc97c1f4?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/fa6a5b20-16d0-5b48-9607-e490cc97c1f4?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/fa6a5b20-16d0-5b48-9607-e490cc97c1f4?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "649",
                      "values": ["649"],
                      "value_label": "649",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "blanc",
                      "values": ["blanc"],
                      "key_label": "Couleur",
                      "value_label": "Blanc",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "75",
                    "department_name": "Paris",
                    "city_label": "Paris 75001",
                    "city": "Paris",
                    "zipcode": "75001",
                    "lat": 48.85717,
                    "lng": 2.3414,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.3414, 48.85717]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "43059534",
                    "user_id": "0c58d509-2335-4007-98d0-02e3c83b87eb",
                    "type": "private",
                    "name": "madani",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2297928945,
                  "first_publication_date": "2023-02-08 21:23:50",
                  "index_date": "2023-02-08 21:23:50",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 128gb",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2297928945.htm",
                  "price": [870],
                  "price_cents": 87000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/4d/fe/04/4dfe04478d6163b2d93e13ccc7bd7ad025b4b3eb.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/4d/fe/04/4dfe04478d6163b2d93e13ccc7bd7ad025b4b3eb.jpg?rule=ad-small",
                    "nb_images": 3,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/4d/fe/04/4dfe04478d6163b2d93e13ccc7bd7ad025b4b3eb.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bb/7e/c3/bb7ec30db2f6a70ed760c2c8d03ac9e9305eb27f.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/a9/ac/2d/a9ac2d924bd44078c5a2313ef5c28c671098ca8c.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/4d/fe/04/4dfe04478d6163b2d93e13ccc7bd7ad025b4b3eb.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bb/7e/c3/bb7ec30db2f6a70ed760c2c8d03ac9e9305eb27f.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/a9/ac/2d/a9ac2d924bd44078c5a2313ef5c28c671098ca8c.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/4d/fe/04/4dfe04478d6163b2d93e13ccc7bd7ad025b4b3eb.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bb/7e/c3/bb7ec30db2f6a70ed760c2c8d03ac9e9305eb27f.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/a9/ac/2d/a9ac2d924bd44078c5a2313ef5c28c671098ca8c.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "rating_score",
                      "value": "1",
                      "values": ["1"],
                      "value_label": "1",
                      "generic": false
                    },
                    {
                      "key": "rating_count",
                      "value": "6",
                      "values": ["6"],
                      "value_label": "6",
                      "generic": false
                    },
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/f30cbb8a-9390-5cb5-aaf2-35df244ad60c?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/f30cbb8a-9390-5cb5-aaf2-35df244ad60c?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/f30cbb8a-9390-5cb5-aaf2-35df244ad60c?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "627",
                      "values": ["627"],
                      "value_label": "627",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "violet",
                      "values": ["violet"],
                      "key_label": "Couleur",
                      "value_label": "Violet",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "old_price",
                      "value": "880",
                      "values": ["880"],
                      "value_label": "880",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "1",
                    "region_name": "Alsace",
                    "department_id": "67",
                    "department_name": "Bas-Rhin",
                    "city_label": "Strasbourg 67000",
                    "city": "Strasbourg",
                    "zipcode": "67000",
                    "lat": 48.58504,
                    "lng": 7.73642,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [7.73642, 48.58504]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "532286",
                    "user_id": "0aa08f94-11ee-4cee-8c58-83346d4b66eb",
                    "type": "private",
                    "name": "Blck",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2297908055,
                  "first_publication_date": "2023-02-08 20:32:49",
                  "index_date": "2023-02-08 20:32:49",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2297908055.htm",
                  "price": [950],
                  "price_cents": 95000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/86/88/98/86889844af58afe974f4f3102218b4140bd29761.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/86/88/98/86889844af58afe974f4f3102218b4140bd29761.jpg?rule=ad-small",
                    "nb_images": 5,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/86/88/98/86889844af58afe974f4f3102218b4140bd29761.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/51/fd/8b/51fd8b015c36d465bc097f024832802d26273841.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/gh/87/0a/gh870ae62fe24144ef8c1a78d55f9cac35c1de64.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/56/5b/4b/565b4b6247691e24137283b9285a357fb56b9903.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bb/ea/ac/bbeaacab41fb6ad9654cd5ebcf5ba6b92dbbaeb4.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/86/88/98/86889844af58afe974f4f3102218b4140bd29761.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/51/fd/8b/51fd8b015c36d465bc097f024832802d26273841.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/gh/87/0a/gh870ae62fe24144ef8c1a78d55f9cac35c1de64.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/56/5b/4b/565b4b6247691e24137283b9285a357fb56b9903.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bb/ea/ac/bbeaacab41fb6ad9654cd5ebcf5ba6b92dbbaeb4.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/86/88/98/86889844af58afe974f4f3102218b4140bd29761.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/51/fd/8b/51fd8b015c36d465bc097f024832802d26273841.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/gh/87/0a/gh870ae62fe24144ef8c1a78d55f9cac35c1de64.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/56/5b/4b/565b4b6247691e24137283b9285a357fb56b9903.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bb/ea/ac/bbeaacab41fb6ad9654cd5ebcf5ba6b92dbbaeb4.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "rating_score",
                      "value": "1",
                      "values": ["1"],
                      "value_label": "1",
                      "generic": false
                    },
                    {
                      "key": "rating_count",
                      "value": "1",
                      "values": ["1"],
                      "value_label": "1",
                      "generic": false
                    },
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/0ce46aaa-3a37-5dda-9869-9aa1aa6d049b?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/0ce46aaa-3a37-5dda-9869-9aa1aa6d049b?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/0ce46aaa-3a37-5dda-9869-9aa1aa6d049b?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "649",
                      "values": ["649"],
                      "value_label": "649",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "tresbonetat",
                      "values": ["tresbonetat"],
                      "key_label": "État",
                      "value_label": "Très bon état",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "77",
                    "department_name": "Seine-et-Marne",
                    "city_label": "Chessy 77700",
                    "city": "Chessy",
                    "zipcode": "77700",
                    "lat": 48.87961,
                    "lng": 2.76066,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.76066, 48.87961]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "34095276",
                    "user_id": "18ce2fdc-b9c1-40c4-b4b6-462ae0c40059",
                    "type": "private",
                    "name": "Ana",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2293798871,
                  "first_publication_date": "2023-01-31 20:02:53",
                  "index_date": "2023-01-31 20:02:53",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2293798871.htm",
                  "price": [1],
                  "price_cents": 100,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/ea/63/2f/ea632ff50c7cb461375a5481b9cd1522f317156b.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/ea/63/2f/ea632ff50c7cb461375a5481b9cd1522f317156b.jpg?rule=ad-small",
                    "nb_images": 1,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ea/63/2f/ea632ff50c7cb461375a5481b9cd1522f317156b.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ea/63/2f/ea632ff50c7cb461375a5481b9cd1522f317156b.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ea/63/2f/ea632ff50c7cb461375a5481b9cd1522f317156b.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/78371def-5883-578d-b5fc-31e07b77bb75?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/78371def-5883-578d-b5fc-31e07b77bb75?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/78371def-5883-578d-b5fc-31e07b77bb75?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "649",
                      "values": ["649"],
                      "value_label": "649",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "colissimo", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "13",
                    "region_name": "Languedoc-Roussillon",
                    "department_id": "11",
                    "department_name": "Aude",
                    "city_label": "Port-la-Nouvelle 11210",
                    "city": "Port-la-Nouvelle",
                    "zipcode": "11210",
                    "lat": 43.02277,
                    "lng": 3.03962,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [3.03962, 43.02277]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "27508397",
                    "user_id": "a7c6e18a-ea98-411f-b8d0-f98bb6635228",
                    "type": "private",
                    "name": "kero",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false
                },
                {
                  "list_id": 2284594482,
                  "first_publication_date": "2023-01-14 01:26:50",
                  "index_date": "2023-02-09 12:44:07",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Recherche iphone 14",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2284594482.htm",
                  "images": { "nb_images": 0 },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/f9e78852-8ff2-55d1-b287-a473ad46421f?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/f9e78852-8ff2-55d1-b287-a473ad46421f?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/f9e78852-8ff2-55d1-b287-a473ad46421f?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "454",
                      "values": ["454"],
                      "value_label": "454",
                      "generic": false
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": [
                        "mondial_relay",
                        "courrier_suivi",
                        "colissimo",
                        "face_to_face"
                      ],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "16",
                    "region_name": "Midi-Pyrénées",
                    "department_id": "31",
                    "department_name": "Haute-Garonne",
                    "city_label": "Toulouse 31000",
                    "city": "Toulouse",
                    "zipcode": "31000",
                    "lat": 43.60579,
                    "lng": 1.44863,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [1.44863, 43.60579]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "66952593",
                    "user_id": "b708a719-e816-4948-b973-4b7c7c07c9d0",
                    "type": "private",
                    "name": "Megdi",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2287195801,
                  "first_publication_date": "2023-01-18 19:45:44",
                  "index_date": "2023-02-09 21:16:04",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2287195801.htm",
                  "price": [1000],
                  "price_cents": 100000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/ff/1b/36/ff1b366bca1e912797426de3b382037baeb15cb2.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/ff/1b/36/ff1b366bca1e912797426de3b382037baeb15cb2.jpg?rule=ad-small",
                    "nb_images": 3,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ff/1b/36/ff1b366bca1e912797426de3b382037baeb15cb2.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/65/8a/c9/658ac95187abb6c54403cf098c3e574533a5aeda.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/df/13/2e/df132e2e49d90647d1a8f6a1cd995cda7553e483.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ff/1b/36/ff1b366bca1e912797426de3b382037baeb15cb2.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/65/8a/c9/658ac95187abb6c54403cf098c3e574533a5aeda.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/df/13/2e/df132e2e49d90647d1a8f6a1cd995cda7553e483.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ff/1b/36/ff1b366bca1e912797426de3b382037baeb15cb2.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/65/8a/c9/658ac95187abb6c54403cf098c3e574533a5aeda.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/df/13/2e/df132e2e49d90647d1a8f6a1cd995cda7553e483.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/fe3a134f-2c6c-5f09-a962-f0becc93b07d?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/fe3a134f-2c6c-5f09-a962-f0becc93b07d?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/fe3a134f-2c6c-5f09-a962-f0becc93b07d?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "649",
                      "values": ["649"],
                      "value_label": "649",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "64go",
                      "values": ["64go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "64 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "75",
                    "department_name": "Paris",
                    "city_label": "Paris 75012",
                    "city": "Paris",
                    "zipcode": "75012",
                    "lat": 48.84105,
                    "lng": 2.38928,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.38928, 48.84105]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "51879608",
                    "user_id": "347c2670-e1f4-4927-9843-6ad75326b35a",
                    "type": "private",
                    "name": "Dalya",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2296742979,
                  "first_publication_date": "2023-02-06 15:28:52",
                  "index_date": "2023-02-06 15:28:52",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 256 Giga",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2296742979.htm",
                  "price": [800],
                  "price_cents": 80000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/f5/e5/99/f5e599600c2e1b56efba46a723746dc07a5aa20d.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/f5/e5/99/f5e599600c2e1b56efba46a723746dc07a5aa20d.jpg?rule=ad-small",
                    "nb_images": 2,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/f5/e5/99/f5e599600c2e1b56efba46a723746dc07a5aa20d.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/0d/46/de/0d46de40da01b16d48d78ef8a0f7d1a753fd6d28.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/f5/e5/99/f5e599600c2e1b56efba46a723746dc07a5aa20d.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/0d/46/de/0d46de40da01b16d48d78ef8a0f7d1a753fd6d28.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/f5/e5/99/f5e599600c2e1b56efba46a723746dc07a5aa20d.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/0d/46/de/0d46de40da01b16d48d78ef8a0f7d1a753fd6d28.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/0f1e363f-fa89-55d8-b01e-1cfaef0a98a5?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/0f1e363f-fa89-55d8-b01e-1cfaef0a98a5?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/0f1e363f-fa89-55d8-b01e-1cfaef0a98a5?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "575",
                      "values": ["575"],
                      "value_label": "575",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "tresbonetat",
                      "values": ["tresbonetat"],
                      "key_label": "État",
                      "value_label": "Très bon état",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "256go",
                      "values": ["256go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "256 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "old_price",
                      "value": "1200",
                      "values": ["1200"],
                      "value_label": "1200",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "75",
                    "department_name": "Paris",
                    "city_label": "Paris 75001",
                    "city": "Paris",
                    "zipcode": "75001",
                    "lat": 48.85717,
                    "lng": 2.3414,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.3414, 48.85717]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "67242662",
                    "user_id": "ba713943-8221-4daa-bf43-da4e2e556015",
                    "type": "private",
                    "name": "Layna00",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2297180027,
                  "first_publication_date": "2023-02-07 13:25:14",
                  "index_date": "2023-02-07 13:25:14",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 pro violet 128gb",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2297180027.htm",
                  "price": [1250],
                  "price_cents": 125000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/f7/a8/34/f7a834eadbbd9cd72c88fb4bf793829e064179c1.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/f7/a8/34/f7a834eadbbd9cd72c88fb4bf793829e064179c1.jpg?rule=ad-small",
                    "nb_images": 2,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/f7/a8/34/f7a834eadbbd9cd72c88fb4bf793829e064179c1.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/26/ba/48/26ba48955920775aff05bd55ffcef01c2281838a.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/f7/a8/34/f7a834eadbbd9cd72c88fb4bf793829e064179c1.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/26/ba/48/26ba48955920775aff05bd55ffcef01c2281838a.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/f7/a8/34/f7a834eadbbd9cd72c88fb4bf793829e064179c1.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/26/ba/48/26ba48955920775aff05bd55ffcef01c2281838a.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/0adebd34-dabf-5820-a88a-7899b94d8d10?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/0adebd34-dabf-5820-a88a-7899b94d8d10?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/0adebd34-dabf-5820-a88a-7899b94d8d10?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "629",
                      "values": ["629"],
                      "value_label": "629",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14pro",
                      "values": ["iphone14pro"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14 Pro",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "violet",
                      "values": ["violet"],
                      "key_label": "Couleur",
                      "value_label": "Violet",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "old_price",
                      "value": "1300",
                      "values": ["1300"],
                      "value_label": "1300",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "3",
                    "region_name": "Auvergne",
                    "department_id": "63",
                    "department_name": "Puy-de-Dôme",
                    "city_label": "Aulnat 63510",
                    "city": "Aulnat",
                    "zipcode": "63510",
                    "lat": 45.79553,
                    "lng": 3.16405,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [3.16405, 45.79553]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "54074421",
                    "user_id": "7177bd7e-aa61-4524-bb5e-04091d9704ec",
                    "type": "private",
                    "name": "Lenaalvs",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2297703702,
                  "first_publication_date": "2023-02-08 14:28:38",
                  "index_date": "2023-02-08 14:28:38",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 128 go",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2297703702.htm",
                  "price": [760],
                  "price_cents": 76000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/be/1a/c8/be1ac8abae23eba331c852ae7c90550f45e275b0.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/be/1a/c8/be1ac8abae23eba331c852ae7c90550f45e275b0.jpg?rule=ad-small",
                    "nb_images": 2,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/be/1a/c8/be1ac8abae23eba331c852ae7c90550f45e275b0.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/89/ec/9b/89ec9ba3188e46f8980bacfeb97c1cc08eb10856.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/be/1a/c8/be1ac8abae23eba331c852ae7c90550f45e275b0.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/89/ec/9b/89ec9ba3188e46f8980bacfeb97c1cc08eb10856.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/be/1a/c8/be1ac8abae23eba331c852ae7c90550f45e275b0.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/89/ec/9b/89ec9ba3188e46f8980bacfeb97c1cc08eb10856.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "rating_score",
                      "value": "1",
                      "values": ["1"],
                      "value_label": "1",
                      "generic": false
                    },
                    {
                      "key": "rating_count",
                      "value": "1",
                      "values": ["1"],
                      "value_label": "1",
                      "generic": false
                    },
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/a6c75afd-705c-5d0a-81b4-1f30a7b9c430?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/a6c75afd-705c-5d0a-81b4-1f30a7b9c430?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/a6c75afd-705c-5d0a-81b4-1f30a7b9c430?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "1000",
                      "values": ["1000"],
                      "value_label": "1000",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "old_price",
                      "value": "780",
                      "values": ["780"],
                      "value_label": "780",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "2",
                    "region_name": "Aquitaine",
                    "department_id": "33",
                    "department_name": "Gironde",
                    "city_label": "Bordeaux 33000",
                    "city": "Bordeaux",
                    "zipcode": "33000",
                    "lat": 44.8367,
                    "lng": -0.58105,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-0.58105, 44.8367]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "62944392",
                    "user_id": "15110723-fe90-4254-8527-0fb3e486d32b",
                    "type": "private",
                    "name": "Ktncz123",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2283220713,
                  "first_publication_date": "2023-01-11 02:31:07",
                  "index_date": "2023-02-05 21:00:41",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2283220713.htm",
                  "price": [1],
                  "price_cents": 100,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/8a/a1/c9/8aa1c960dc068130935f8a03d9ba7e14f6a82433.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/8a/a1/c9/8aa1c960dc068130935f8a03d9ba7e14f6a82433.jpg?rule=ad-small",
                    "nb_images": 5,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/8a/a1/c9/8aa1c960dc068130935f8a03d9ba7e14f6a82433.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/7f/90/c4/7f90c443c557251f9f683a7327e6a26fa89f02be.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/8c/81/1e/8c811e5d68b2c76598fa0d3a444da986dfa3f4c5.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b8/3a/ec/b83aec6ad56bb5ea3ba9a22e6dbf8bd876f836ce.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bb/56/a8/bb56a8ab2274ebc5bbc6f9779c920e10ec402143.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/8a/a1/c9/8aa1c960dc068130935f8a03d9ba7e14f6a82433.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/7f/90/c4/7f90c443c557251f9f683a7327e6a26fa89f02be.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/8c/81/1e/8c811e5d68b2c76598fa0d3a444da986dfa3f4c5.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b8/3a/ec/b83aec6ad56bb5ea3ba9a22e6dbf8bd876f836ce.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bb/56/a8/bb56a8ab2274ebc5bbc6f9779c920e10ec402143.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/8a/a1/c9/8aa1c960dc068130935f8a03d9ba7e14f6a82433.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/7f/90/c4/7f90c443c557251f9f683a7327e6a26fa89f02be.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/8c/81/1e/8c811e5d68b2c76598fa0d3a444da986dfa3f4c5.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b8/3a/ec/b83aec6ad56bb5ea3ba9a22e6dbf8bd876f836ce.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bb/56/a8/bb56a8ab2274ebc5bbc6f9779c920e10ec402143.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/f71ef870-a313-5ca2-bed2-62a8e1566eeb?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/f71ef870-a313-5ca2-bed2-62a8e1566eeb?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/f71ef870-a313-5ca2-bed2-62a8e1566eeb?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "649",
                      "values": ["649"],
                      "value_label": "649",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "tresbonetat",
                      "values": ["tresbonetat"],
                      "key_label": "État",
                      "value_label": "Très bon état",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "bleu",
                      "values": ["bleu"],
                      "key_label": "Couleur",
                      "value_label": "Bleu",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "colissimo", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "18",
                    "region_name": "Pays de la Loire",
                    "department_id": "44",
                    "department_name": "Loire-Atlantique",
                    "city_label": "Rezé 44400",
                    "city": "Rezé",
                    "zipcode": "44400",
                    "lat": 47.1581,
                    "lng": -1.55056,
                    "source": "address",
                    "provider": "here",
                    "is_shape": false,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-1.55056, 47.1581]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "66781001",
                    "user_id": "67d91c17-c0e2-47d6-9ef5-b5f491869a0c",
                    "type": "private",
                    "name": "Andrei garaje",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false
                },
                {
                  "list_id": 2297452609,
                  "first_publication_date": "2023-02-07 21:49:51",
                  "index_date": "2023-02-07 21:49:51",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 noir 128go neuf jamais ouvert",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2297452609.htm",
                  "price": [800],
                  "price_cents": 80000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/db/29/f3/db29f35173e984d691f01de7143f7f17b0372131.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/db/29/f3/db29f35173e984d691f01de7143f7f17b0372131.jpg?rule=ad-small",
                    "nb_images": 2,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/db/29/f3/db29f35173e984d691f01de7143f7f17b0372131.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/92/88/9e/92889e2b0f9992d5f2592f0261690ee0c527573e.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/db/29/f3/db29f35173e984d691f01de7143f7f17b0372131.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/92/88/9e/92889e2b0f9992d5f2592f0261690ee0c527573e.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/db/29/f3/db29f35173e984d691f01de7143f7f17b0372131.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/92/88/9e/92889e2b0f9992d5f2592f0261690ee0c527573e.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/b45a92da-fae5-50b8-9557-07a2d64d481e?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/b45a92da-fae5-50b8-9557-07a2d64d481e?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/b45a92da-fae5-50b8-9557-07a2d64d481e?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "628",
                      "values": ["628"],
                      "value_label": "628",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "old_price",
                      "value": "850",
                      "values": ["850"],
                      "value_label": "850",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "93",
                    "department_name": "Seine-Saint-Denis",
                    "city_label": "Livry-Gargan 93190",
                    "city": "Livry-Gargan",
                    "zipcode": "93190",
                    "lat": 48.91904,
                    "lng": 2.53742,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.53742, 48.91904]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "2363568",
                    "user_id": "cda7eb72-d2c4-47a7-ace2-90b284d0cdaf",
                    "type": "private",
                    "name": "MM",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2286561710,
                  "first_publication_date": "2023-01-17 15:21:18",
                  "expiration_date": "2023-03-18 15:21:18",
                  "index_date": "2023-02-09 14:57:12",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 pro",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2286561710.htm",
                  "price": [1299],
                  "price_cents": 129900,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/b0/f7/a5/b0f7a5d01453df06d7e7757fdb4d16b9e2830eec.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/b0/f7/a5/b0f7a5d01453df06d7e7757fdb4d16b9e2830eec.jpg?rule=ad-small",
                    "nb_images": 2,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b0/f7/a5/b0f7a5d01453df06d7e7757fdb4d16b9e2830eec.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/e5/6d/d8/e56dd8d3213f873060dc0c887158c2d1616918d3.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b0/f7/a5/b0f7a5d01453df06d7e7757fdb4d16b9e2830eec.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/e5/6d/d8/e56dd8d3213f873060dc0c887158c2d1616918d3.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b0/f7/a5/b0f7a5d01453df06d7e7757fdb4d16b9e2830eec.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/e5/6d/d8/e56dd8d3213f873060dc0c887158c2d1616918d3.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "activity_sector",
                      "value": "3",
                      "values": ["3"],
                      "value_label": "3",
                      "generic": false
                    },
                    {
                      "key": "stock_quantity",
                      "value": "1",
                      "values": ["1"],
                      "value_label": "1",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "new_item_type",
                      "value": "modeledexposition",
                      "values": ["modeledexposition"],
                      "key_label": "Type d'article neuf",
                      "value_label": "Modèle d'exposition",
                      "generic": false
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14pro",
                      "values": ["iphone14pro"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14 Pro",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "old_price",
                      "value": "1329",
                      "values": ["1329"],
                      "value_label": "1329",
                      "generic": false
                    },
                    {
                      "key": "spare_parts_availability",
                      "value": "non_renseignee",
                      "values": ["non_renseignee"],
                      "key_label": "Disponibilité des pièces détachées",
                      "value_label": "Non renseignée",
                      "generic": true
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "15",
                    "region_name": "Lorraine",
                    "department_id": "57",
                    "department_name": "Moselle",
                    "city_label": "Sarreguemines 57200",
                    "city": "Sarreguemines",
                    "zipcode": "57200",
                    "lat": 49.10824,
                    "lng": 7.07059,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [7.07059, 49.10824]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "59579667",
                    "user_id": "b7e98851-f522-4c7b-8238-9c962d346525",
                    "type": "pro",
                    "name": "PHONE\u0026CO SARREGUEMINES",
                    "siren": "898299821",
                    "no_salesmen": true,
                    "activity_sector": "3"
                  },
                  "options": {
                    "has_option": true,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": true,
                    "sub_toplist": false
                  },
                  "has_phone": true,
                  "is_boosted": true
                },
                {
                  "list_id": 2292132819,
                  "first_publication_date": "2023-01-28 21:43:01",
                  "index_date": "2023-02-09 18:46:04",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 plus 128gb",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2292132819.htm",
                  "price": [880],
                  "price_cents": 88000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/b3/81/60/b38160fd67010c01cd36c1f8df18015592da0e15.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/b3/81/60/b38160fd67010c01cd36c1f8df18015592da0e15.jpg?rule=ad-small",
                    "nb_images": 3,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b3/81/60/b38160fd67010c01cd36c1f8df18015592da0e15.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/e7/2e/11/e72e113d8918b300276795c3d8ae40ce32b59b78.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/77/e1/0e/77e10eb61aad55d257d0cc7a9319251bb6ec9045.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b3/81/60/b38160fd67010c01cd36c1f8df18015592da0e15.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/e7/2e/11/e72e113d8918b300276795c3d8ae40ce32b59b78.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/77/e1/0e/77e10eb61aad55d257d0cc7a9319251bb6ec9045.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b3/81/60/b38160fd67010c01cd36c1f8df18015592da0e15.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/e7/2e/11/e72e113d8918b300276795c3d8ae40ce32b59b78.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/77/e1/0e/77e10eb61aad55d257d0cc7a9319251bb6ec9045.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/694b16c3-7cc4-5409-a1b2-d4eb21d8fed7?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/694b16c3-7cc4-5409-a1b2-d4eb21d8fed7?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/694b16c3-7cc4-5409-a1b2-d4eb21d8fed7?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "714",
                      "values": ["714"],
                      "value_label": "714",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14plus",
                      "values": ["iphone14plus"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14 Plus",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "bleu",
                      "values": ["bleu"],
                      "key_label": "Couleur",
                      "value_label": "Bleu",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "18",
                    "region_name": "Pays de la Loire",
                    "department_id": "44",
                    "department_name": "Loire-Atlantique",
                    "city_label": "Nantes 44000",
                    "city": "Nantes",
                    "zipcode": "44000",
                    "lat": 47.21811,
                    "lng": -1.55302,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-1.55302, 47.21811]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "67131327",
                    "user_id": "da0fa14c-e92f-4c74-970f-b4bd854c4d24",
                    "type": "private",
                    "name": "Theophile",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2286787573,
                  "first_publication_date": "2023-01-17 23:13:49",
                  "index_date": "2023-02-09 12:04:23",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 noir 128go",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2286787573.htm",
                  "price": [850],
                  "price_cents": 85000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/1a/a0/25/1aa0253e7d3ffee67925cdc7a3b25f16cf0b2c65.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/1a/a0/25/1aa0253e7d3ffee67925cdc7a3b25f16cf0b2c65.jpg?rule=ad-small",
                    "nb_images": 4,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/1a/a0/25/1aa0253e7d3ffee67925cdc7a3b25f16cf0b2c65.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/be/03/e8/be03e815802d829c1fc8eb41e84934c6e4f8bf43.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/9c/c4/11/9cc4114a28f8adb7dd17a03a3a71f48aeec482e7.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/54/04/99/54049985ab5e439e4f1f0893874dc1c606ddfb95.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/1a/a0/25/1aa0253e7d3ffee67925cdc7a3b25f16cf0b2c65.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/be/03/e8/be03e815802d829c1fc8eb41e84934c6e4f8bf43.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/9c/c4/11/9cc4114a28f8adb7dd17a03a3a71f48aeec482e7.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/54/04/99/54049985ab5e439e4f1f0893874dc1c606ddfb95.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/1a/a0/25/1aa0253e7d3ffee67925cdc7a3b25f16cf0b2c65.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/be/03/e8/be03e815802d829c1fc8eb41e84934c6e4f8bf43.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/9c/c4/11/9cc4114a28f8adb7dd17a03a3a71f48aeec482e7.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/54/04/99/54049985ab5e439e4f1f0893874dc1c606ddfb95.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/02bddd89-e96c-5c03-8267-74bd93fcddd6?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/02bddd89-e96c-5c03-8267-74bd93fcddd6?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/02bddd89-e96c-5c03-8267-74bd93fcddd6?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "598",
                      "values": ["598"],
                      "value_label": "598",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "75",
                    "department_name": "Paris",
                    "city_label": "Paris 75012",
                    "city": "Paris",
                    "zipcode": "75012",
                    "lat": 48.84105,
                    "lng": 2.38928,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.38928, 48.84105]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "38787035",
                    "user_id": "d2ca6e1a-b02b-4c5f-ba48-ed0ff03b933a",
                    "type": "private",
                    "name": "chloeedavidd152",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2279830000,
                  "first_publication_date": "2023-01-04 14:28:48",
                  "index_date": "2023-02-09 18:50:59",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 noir",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2279830000.htm",
                  "price": [930],
                  "price_cents": 93000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/88/eb/2b/88eb2b185a1e3d97f970bf39bd7e164f50198074.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/88/eb/2b/88eb2b185a1e3d97f970bf39bd7e164f50198074.jpg?rule=ad-small",
                    "nb_images": 1,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/88/eb/2b/88eb2b185a1e3d97f970bf39bd7e164f50198074.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/88/eb/2b/88eb2b185a1e3d97f970bf39bd7e164f50198074.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/88/eb/2b/88eb2b185a1e3d97f970bf39bd7e164f50198074.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/aa50fc93-d3f4-53d7-a181-5aae0ea5936c?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/aa50fc93-d3f4-53d7-a181-5aae0ea5936c?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/aa50fc93-d3f4-53d7-a181-5aae0ea5936c?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "640",
                      "values": ["640"],
                      "value_label": "640",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "3",
                    "region_name": "Auvergne",
                    "department_id": "3",
                    "department_name": "Allier",
                    "city_label": "Montluçon 03100",
                    "city": "Montluçon",
                    "zipcode": "03100",
                    "lat": 46.33939,
                    "lng": 2.60191,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.60191, 46.33939]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "33311241",
                    "user_id": "a79a4f46-304d-4ab3-94f3-b2c1320048a2",
                    "type": "private",
                    "name": "ben",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2297780256,
                  "first_publication_date": "2023-02-08 16:44:41",
                  "index_date": "2023-02-08 16:44:41",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 Pro neuf scellé",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2297780256.htm",
                  "price": [1200],
                  "price_cents": 120000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/ed/de/5e/edde5ebf9ba6f8a03e331db2a646875141905efd.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/ed/de/5e/edde5ebf9ba6f8a03e331db2a646875141905efd.jpg?rule=ad-small",
                    "nb_images": 2,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ed/de/5e/edde5ebf9ba6f8a03e331db2a646875141905efd.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/d1/a6/1a/d1a61aceeeb19ce97e20b0e7b0192bb5653c87df.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ed/de/5e/edde5ebf9ba6f8a03e331db2a646875141905efd.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/d1/a6/1a/d1a61aceeeb19ce97e20b0e7b0192bb5653c87df.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ed/de/5e/edde5ebf9ba6f8a03e331db2a646875141905efd.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/d1/a6/1a/d1a61aceeeb19ce97e20b0e7b0192bb5653c87df.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/d6a01df7-742e-5278-ab4a-53b58c41e18e?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/d6a01df7-742e-5278-ab4a-53b58c41e18e?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/d6a01df7-742e-5278-ab4a-53b58c41e18e?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "430",
                      "values": ["430"],
                      "value_label": "430",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14pro",
                      "values": ["iphone14pro"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14 Pro",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "violet",
                      "values": ["violet"],
                      "key_label": "Couleur",
                      "value_label": "Violet",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "75",
                    "department_name": "Paris",
                    "city_label": "Paris 75116 16e Arrondissement",
                    "city": "Paris",
                    "zipcode": "75116",
                    "lat": 48.86532,
                    "lng": 2.27512,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.27512, 48.86532]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "66888886",
                    "user_id": "ef6b656b-bb7d-4a30-9f57-97a6129451eb",
                    "type": "private",
                    "name": "Y.Boulehjour",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2282746948,
                  "first_publication_date": "2023-01-10 00:38:57",
                  "index_date": "2023-02-09 18:01:06",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 Plus",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2282746948.htm",
                  "price": [900],
                  "price_cents": 90000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/06/8e/6a/068e6aa83b05a3f48f5598b9540454759c5a8259.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/06/8e/6a/068e6aa83b05a3f48f5598b9540454759c5a8259.jpg?rule=ad-small",
                    "nb_images": 3,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/06/8e/6a/068e6aa83b05a3f48f5598b9540454759c5a8259.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/19/7d/5e/197d5e38b2205545228aa8aa4d74d7cf62bc4289.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ba/e1/41/bae141363766c8b9e5693d1cbfd97f0e6a0a16c4.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/06/8e/6a/068e6aa83b05a3f48f5598b9540454759c5a8259.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/19/7d/5e/197d5e38b2205545228aa8aa4d74d7cf62bc4289.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ba/e1/41/bae141363766c8b9e5693d1cbfd97f0e6a0a16c4.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/06/8e/6a/068e6aa83b05a3f48f5598b9540454759c5a8259.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/19/7d/5e/197d5e38b2205545228aa8aa4d74d7cf62bc4289.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ba/e1/41/bae141363766c8b9e5693d1cbfd97f0e6a0a16c4.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/17d51fb0-7c02-52c5-ae75-b4527a5c0e6e?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/17d51fb0-7c02-52c5-ae75-b4527a5c0e6e?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/17d51fb0-7c02-52c5-ae75-b4527a5c0e6e?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "721",
                      "values": ["721"],
                      "value_label": "721",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14plus",
                      "values": ["iphone14plus"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14 Plus",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "bleu",
                      "values": ["bleu"],
                      "key_label": "Couleur",
                      "value_label": "Bleu",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "21",
                    "region_name": "Provence-Alpes-Côte d'Azur",
                    "department_id": "13",
                    "department_name": "Bouches-du-Rhône",
                    "city_label": "Aubagne 13400",
                    "city": "Aubagne",
                    "zipcode": "13400",
                    "lat": 43.29217,
                    "lng": 5.56868,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [5.56868, 43.29217]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "63831565",
                    "user_id": "32da7c6c-aa40-4eb5-8dae-6e6ee3dc3a8b",
                    "type": "private",
                    "name": "Benzet",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2295963375,
                  "first_publication_date": "2023-02-05 11:06:09",
                  "index_date": "2023-02-05 11:06:09",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2295963375.htm",
                  "price": [400],
                  "price_cents": 40000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/ae/41/ec/ae41ecaceb45aca378c15feec6ce4e07d0f4180f.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/ae/41/ec/ae41ecaceb45aca378c15feec6ce4e07d0f4180f.jpg?rule=ad-small",
                    "nb_images": 3,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ae/41/ec/ae41ecaceb45aca378c15feec6ce4e07d0f4180f.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/af/d5/d3/afd5d3a9db2d3cdc4675b90847679a8c02ab325d.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/60/2a/c8/602ac8cdbe6580124b0bfc103908800d38faa376.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ae/41/ec/ae41ecaceb45aca378c15feec6ce4e07d0f4180f.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/af/d5/d3/afd5d3a9db2d3cdc4675b90847679a8c02ab325d.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/60/2a/c8/602ac8cdbe6580124b0bfc103908800d38faa376.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/ae/41/ec/ae41ecaceb45aca378c15feec6ce4e07d0f4180f.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/af/d5/d3/afd5d3a9db2d3cdc4675b90847679a8c02ab325d.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/60/2a/c8/602ac8cdbe6580124b0bfc103908800d38faa376.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/adbe992e-7e38-55e5-b03a-371431cceb72?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/adbe992e-7e38-55e5-b03a-371431cceb72?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/adbe992e-7e38-55e5-b03a-371431cceb72?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "652",
                      "values": ["652"],
                      "value_label": "652",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "pourpieces",
                      "values": ["pourpieces"],
                      "key_label": "État",
                      "value_label": "Pour pièces",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "bleu",
                      "values": ["bleu"],
                      "key_label": "Couleur",
                      "value_label": "Bleu",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "21",
                    "region_name": "Provence-Alpes-Côte d'Azur",
                    "department_id": "83",
                    "department_name": "Var",
                    "city_label": "Six-Fours-les-Plages 83140",
                    "city": "Six-Fours-les-Plages",
                    "zipcode": "83140",
                    "lat": 43.09332,
                    "lng": 5.84324,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [5.84324, 43.09332]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "14567924",
                    "user_id": "28823ce4-a3c0-4a3f-822b-2aac9ae621dd",
                    "type": "private",
                    "name": "Z3",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false
                },
                {
                  "list_id": 2298375848,
                  "first_publication_date": "2023-02-09 20:41:28",
                  "index_date": "2023-02-09 20:41:28",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 pro 256gb violet",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2298375848.htm",
                  "price": [1250],
                  "price_cents": 125000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/bf/23/98/bf2398dd28628ac8a071bbeb423f8d785987eddd.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/bf/23/98/bf2398dd28628ac8a071bbeb423f8d785987eddd.jpg?rule=ad-small",
                    "nb_images": 1,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bf/23/98/bf2398dd28628ac8a071bbeb423f8d785987eddd.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bf/23/98/bf2398dd28628ac8a071bbeb423f8d785987eddd.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bf/23/98/bf2398dd28628ac8a071bbeb423f8d785987eddd.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/550e041d-4740-5416-90ca-f2f19d858ed9?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/550e041d-4740-5416-90ca-f2f19d858ed9?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/550e041d-4740-5416-90ca-f2f19d858ed9?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "619",
                      "values": ["619"],
                      "value_label": "619",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14pro",
                      "values": ["iphone14pro"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14 Pro",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "violet",
                      "values": ["violet"],
                      "key_label": "Couleur",
                      "value_label": "Violet",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "256go",
                      "values": ["256go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "256 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "20",
                    "region_name": "Poitou-Charentes",
                    "department_id": "86",
                    "department_name": "Vienne",
                    "city_label": "Buxerolles 86180",
                    "city": "Buxerolles",
                    "zipcode": "86180",
                    "lat": 46.59877,
                    "lng": 0.35255,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [0.35255, 46.59877]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "16174012",
                    "user_id": "fb409a87-0230-4fc8-8e85-7331ce22dbb3",
                    "type": "private",
                    "name": "jack",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2283780898,
                  "first_publication_date": "2023-01-12 11:21:08",
                  "index_date": "2023-02-09 21:36:03",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 128 giga noir",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2283780898.htm",
                  "price": [850],
                  "price_cents": 85000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/f9/3a/96/f93a96104d627f56f488ff486b2c6f7386521db8.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/f9/3a/96/f93a96104d627f56f488ff486b2c6f7386521db8.jpg?rule=ad-small",
                    "nb_images": 1,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/f9/3a/96/f93a96104d627f56f488ff486b2c6f7386521db8.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/f9/3a/96/f93a96104d627f56f488ff486b2c6f7386521db8.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/f9/3a/96/f93a96104d627f56f488ff486b2c6f7386521db8.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/20b18915-06f9-5954-ada1-7ddc37ffed31?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/20b18915-06f9-5954-ada1-7ddc37ffed31?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/20b18915-06f9-5954-ada1-7ddc37ffed31?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "587",
                      "values": ["587"],
                      "value_label": "587",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "21",
                    "region_name": "Provence-Alpes-Côte d'Azur",
                    "department_id": "84",
                    "department_name": "Vaucluse",
                    "city_label": "Avignon 84000",
                    "city": "Avignon",
                    "zipcode": "84000",
                    "lat": 43.95355,
                    "lng": 4.80647,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [4.80647, 43.95355]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "66731799",
                    "user_id": "3e6e0f13-ee8e-45d3-86ce-1a34f25affb1",
                    "type": "private",
                    "name": "iPhone",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2274525573,
                  "first_publication_date": "2022-12-22 15:02:20",
                  "index_date": "2023-02-09 21:46:59",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 Plus Bleu 128gb",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2274525573.htm",
                  "price": [750],
                  "price_cents": 75000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/e8/29/97/e829977831c736845de80790b1c2dad022122cb6.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/e8/29/97/e829977831c736845de80790b1c2dad022122cb6.jpg?rule=ad-small",
                    "nb_images": 1,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/e8/29/97/e829977831c736845de80790b1c2dad022122cb6.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/e8/29/97/e829977831c736845de80790b1c2dad022122cb6.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/e8/29/97/e829977831c736845de80790b1c2dad022122cb6.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/cf6042c0-97b7-57a7-9026-c6192b5cb2f4?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/cf6042c0-97b7-57a7-9026-c6192b5cb2f4?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/cf6042c0-97b7-57a7-9026-c6192b5cb2f4?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "723",
                      "values": ["723"],
                      "value_label": "723",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14plus",
                      "values": ["iphone14plus"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14 Plus",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "bleu",
                      "values": ["bleu"],
                      "key_label": "Couleur",
                      "value_label": "Bleu",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "92",
                    "department_name": "Hauts-de-Seine",
                    "city_label": "Boulogne-Billancourt 92100",
                    "city": "Boulogne-Billancourt",
                    "zipcode": "92100",
                    "lat": 48.83527,
                    "lng": 2.24078,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.24078, 48.83527]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "60485118",
                    "user_id": "f86e1f51-ac14-4c82-b5aa-5d782c47cf20",
                    "type": "private",
                    "name": "Maxence",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                },
                {
                  "list_id": 2295346161,
                  "first_publication_date": "2023-02-04 08:55:38",
                  "index_date": "2023-02-04 08:55:38",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2295346161.htm",
                  "price": [600],
                  "price_cents": 60000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/cb/c6/ec/cbc6eca7d914e7d05d1d001966f68dd23e541ff5.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/cb/c6/ec/cbc6eca7d914e7d05d1d001966f68dd23e541ff5.jpg?rule=ad-small",
                    "nb_images": 1,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/cb/c6/ec/cbc6eca7d914e7d05d1d001966f68dd23e541ff5.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/cb/c6/ec/cbc6eca7d914e7d05d1d001966f68dd23e541ff5.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/cb/c6/ec/cbc6eca7d914e7d05d1d001966f68dd23e541ff5.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "rating_score",
                      "value": "0.2",
                      "values": ["0.2"],
                      "value_label": "0.2",
                      "generic": false
                    },
                    {
                      "key": "rating_count",
                      "value": "1",
                      "values": ["1"],
                      "value_label": "1",
                      "generic": false
                    },
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/371dac0e-1e13-503e-b48b-8c601857592e?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/371dac0e-1e13-503e-b48b-8c601857592e?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/371dac0e-1e13-503e-b48b-8c601857592e?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "649",
                      "values": ["649"],
                      "value_label": "649",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "mondial_relay",
                      "values": ["mondial_relay", "face_to_face"],
                      "value_label": "mondial_relay",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "true",
                      "values": ["true"],
                      "value_label": "true",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "old_price",
                      "value": "750",
                      "values": ["750"],
                      "value_label": "750",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "91",
                    "department_name": "Essonne",
                    "city_label": "Corbeil-Essonnes 91100",
                    "city": "Corbeil-Essonnes",
                    "zipcode": "91100",
                    "lat": 48.61264,
                    "lng": 2.48233,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.48233, 48.61264]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "44714439",
                    "user_id": "988ee56e-1e58-450e-b558-f9edba8ea936",
                    "type": "private",
                    "name": "Leoangel",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false
                },
                {
                  "list_id": 2278214949,
                  "first_publication_date": "2023-01-01 01:01:54",
                  "index_date": "2023-01-01 01:01:54",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 neuf 256go",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2278214949.htm",
                  "price": [900],
                  "price_cents": 90000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/96/42/a0/9642a0b6dec581009167057a823c327cfbabd59d.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/96/42/a0/9642a0b6dec581009167057a823c327cfbabd59d.jpg?rule=ad-small",
                    "nb_images": 3,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/96/42/a0/9642a0b6dec581009167057a823c327cfbabd59d.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/7f/5e/9b/7f5e9bc5159f32e734053cf59f235c4ed23e85cd.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/9a/03/01/9a030171a147ee66a18dee7970c3bbaff4c93c0d.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/96/42/a0/9642a0b6dec581009167057a823c327cfbabd59d.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/7f/5e/9b/7f5e9bc5159f32e734053cf59f235c4ed23e85cd.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/9a/03/01/9a030171a147ee66a18dee7970c3bbaff4c93c0d.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/96/42/a0/9642a0b6dec581009167057a823c327cfbabd59d.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/7f/5e/9b/7f5e9bc5159f32e734053cf59f235c4ed23e85cd.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/9a/03/01/9a030171a147ee66a18dee7970c3bbaff4c93c0d.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "rating_score",
                      "value": "0.97",
                      "values": ["0.97"],
                      "value_label": "0.97",
                      "generic": false
                    },
                    {
                      "key": "rating_count",
                      "value": "17",
                      "values": ["17"],
                      "value_label": "17",
                      "generic": false
                    },
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/074a798e-ef5a-5f1f-b778-70fd5fe68772?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/074a798e-ef5a-5f1f-b778-70fd5fe68772?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/074a798e-ef5a-5f1f-b778-70fd5fe68772?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "500",
                      "values": ["500"],
                      "value_label": "500",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14",
                      "values": ["iphone14"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "256go",
                      "values": ["256go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "256 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "75",
                    "department_name": "Paris",
                    "city_label": "Paris 75012 Aligre-Gare de Lyon",
                    "city": "Paris",
                    "zipcode": "75012",
                    "lat": 48.84953,
                    "lng": 2.37587,
                    "source": "address",
                    "provider": "here",
                    "is_shape": false,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.37587, 48.84953]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "3297675",
                    "user_id": "6b8c641e-e292-4b61-ae14-70b50be0b340",
                    "type": "private",
                    "name": "Damián",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": false,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": false,
                    "sub_toplist": false
                  },
                  "has_phone": false,
                  "is_boosted": true
                }
              ],
              "ads_alu": [
                {
                  "list_id": 2294522385,
                  "first_publication_date": "2023-02-02 12:44:45",
                  "index_date": "2023-02-09 12:48:43",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "IPhone 14 plus midnight 128 Go",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2294522385.htm",
                  "price": [950],
                  "price_cents": 95000,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/89/cf/38/89cf384f7766f65a912e7274a7ef799e5a683f7c.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/89/cf/38/89cf384f7766f65a912e7274a7ef799e5a683f7c.jpg?rule=ad-small",
                    "nb_images": 4,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/89/cf/38/89cf384f7766f65a912e7274a7ef799e5a683f7c.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bf/3f/2e/bf3f2ef3bd7053c341eba42b8a77d2a63b255973.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/42/f5/ce/42f5ce851844662ce8fd1bdbbfde5a78244a5ed2.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/c3/a2/53/c3a25382f230a8ac6944d74ab079a50bf8b78f77.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/89/cf/38/89cf384f7766f65a912e7274a7ef799e5a683f7c.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bf/3f/2e/bf3f2ef3bd7053c341eba42b8a77d2a63b255973.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/42/f5/ce/42f5ce851844662ce8fd1bdbbfde5a78244a5ed2.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/c3/a2/53/c3a25382f230a8ac6944d74ab079a50bf8b78f77.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/89/cf/38/89cf384f7766f65a912e7274a7ef799e5a683f7c.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bf/3f/2e/bf3f2ef3bd7053c341eba42b8a77d2a63b255973.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/42/f5/ce/42f5ce851844662ce8fd1bdbbfde5a78244a5ed2.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/c3/a2/53/c3a25382f230a8ac6944d74ab079a50bf8b78f77.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "profile_picture_url",
                      "value": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/22b821ed-4ab8-59fe-bb3d-72f53903350b?rule=pp-small",
                      "values": [
                        "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/22b821ed-4ab8-59fe-bb3d-72f53903350b?rule=pp-small"
                      ],
                      "value_label": "https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/21d2b0bc-e54c-4b64-a30b-89127b18b785/images/profile/pictures/default/22b821ed-4ab8-59fe-bb3d-72f53903350b?rule=pp-small",
                      "generic": false
                    },
                    {
                      "key": "estimated_parcel_weight",
                      "value": "700",
                      "values": ["700"],
                      "value_label": "700",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14plus",
                      "values": ["iphone14plus"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14 Plus",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shipping_type",
                      "value": "face_to_face",
                      "values": ["face_to_face"],
                      "value_label": "face_to_face",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "old_price",
                      "value": "1000",
                      "values": ["1000"],
                      "value_label": "1000",
                      "generic": false
                    },
                    {
                      "key": "payment_methods",
                      "value": "installments3x",
                      "values": ["installments3x", "installments4x"],
                      "value_label": "installments3x",
                      "generic": false
                    },
                    {
                      "key": "donation",
                      "value": "0",
                      "values": ["0"],
                      "value_label": "0",
                      "generic": false
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "5",
                    "region_name": "Bourgogne",
                    "department_id": "21",
                    "department_name": "Côte-d'Or",
                    "city_label": "Dijon 21000 Maladière-Drapeau-Clemenceau",
                    "city": "Dijon",
                    "zipcode": "21000",
                    "lat": 47.33211,
                    "lng": 5.04487,
                    "source": "address",
                    "provider": "here",
                    "is_shape": false,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [5.04487, 47.33211]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "67190930",
                    "user_id": "a3643c24-3337-43e8-821e-dc3f8da732d6",
                    "type": "private",
                    "name": "Al",
                    "no_salesmen": true,
                    "activity_sector": ""
                  },
                  "options": {
                    "has_option": true,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": true,
                    "sub_toplist": false
                  },
                  "has_phone": false
                },
                {
                  "list_id": 2286561710,
                  "first_publication_date": "2023-01-17 15:21:18",
                  "expiration_date": "2023-03-18 15:21:18",
                  "index_date": "2023-02-09 14:57:12",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "Iphone 14 pro",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/2286561710.htm",
                  "price": [1299],
                  "price_cents": 129900,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/b0/f7/a5/b0f7a5d01453df06d7e7757fdb4d16b9e2830eec.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/b0/f7/a5/b0f7a5d01453df06d7e7757fdb4d16b9e2830eec.jpg?rule=ad-small",
                    "nb_images": 2,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b0/f7/a5/b0f7a5d01453df06d7e7757fdb4d16b9e2830eec.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/e5/6d/d8/e56dd8d3213f873060dc0c887158c2d1616918d3.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b0/f7/a5/b0f7a5d01453df06d7e7757fdb4d16b9e2830eec.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/e5/6d/d8/e56dd8d3213f873060dc0c887158c2d1616918d3.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b0/f7/a5/b0f7a5d01453df06d7e7757fdb4d16b9e2830eec.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/e5/6d/d8/e56dd8d3213f873060dc0c887158c2d1616918d3.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "activity_sector",
                      "value": "3",
                      "values": ["3"],
                      "value_label": "3",
                      "generic": false
                    },
                    {
                      "key": "stock_quantity",
                      "value": "1",
                      "values": ["1"],
                      "value_label": "1",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatneuf",
                      "values": ["etatneuf"],
                      "key_label": "État",
                      "value_label": "État neuf",
                      "generic": true
                    },
                    {
                      "key": "new_item_type",
                      "value": "modeledexposition",
                      "values": ["modeledexposition"],
                      "key_label": "Type d'article neuf",
                      "value_label": "Modèle d'exposition",
                      "generic": false
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone14pro",
                      "values": ["iphone14pro"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 14 Pro",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "128go",
                      "values": ["128go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "128 Go",
                      "generic": true
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "old_price",
                      "value": "1329",
                      "values": ["1329"],
                      "value_label": "1329",
                      "generic": false
                    },
                    {
                      "key": "spare_parts_availability",
                      "value": "non_renseignee",
                      "values": ["non_renseignee"],
                      "key_label": "Disponibilité des pièces détachées",
                      "value_label": "Non renseignée",
                      "generic": true
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "15",
                    "region_name": "Lorraine",
                    "department_id": "57",
                    "department_name": "Moselle",
                    "city_label": "Sarreguemines 57200",
                    "city": "Sarreguemines",
                    "zipcode": "57200",
                    "lat": 49.10824,
                    "lng": 7.07059,
                    "source": "city",
                    "provider": "here",
                    "is_shape": true,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [7.07059, 49.10824]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "59579667",
                    "user_id": "b7e98851-f522-4c7b-8238-9c962d346525",
                    "type": "pro",
                    "name": "PHONE\u0026CO SARREGUEMINES",
                    "siren": "898299821",
                    "no_salesmen": true,
                    "activity_sector": "3"
                  },
                  "options": {
                    "has_option": true,
                    "booster": false,
                    "photosup": false,
                    "urgent": false,
                    "gallery": true,
                    "sub_toplist": false
                  },
                  "has_phone": true,
                  "is_boosted": true
                },
                {
                  "list_id": 1870938614,
                  "first_publication_date": "2023-01-26 07:36:17",
                  "expiration_date": "2023-03-27 08:36:17",
                  "index_date": "2023-02-09 15:11:45",
                  "status": "active",
                  "category_id": "17",
                  "category_name": "Téléphonie",
                  "subject": "IPhone 7 avec facture plus garantie",
                  "body": "",
                  "ad_type": "offer",
                  "url": "https://www.leboncoin.fr/telephonie/1870938614.htm",
                  "price": [109],
                  "price_cents": 10900,
                  "images": {
                    "thumb_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/3c/98/8a/3c988a6ead225dc0efc57002d818f5f54dd0b67e.jpg?rule=ad-thumb",
                    "small_url": "https://img.leboncoin.fr/api/v1/lbcpb1/images/3c/98/8a/3c988a6ead225dc0efc57002d818f5f54dd0b67e.jpg?rule=ad-small",
                    "nb_images": 5,
                    "urls": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/3c/98/8a/3c988a6ead225dc0efc57002d818f5f54dd0b67e.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b7/5a/88/b75a88d5d237d5b8bea8b742e2470014caabff5c.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bf/37/a7/bf37a7db58d84852c4a6ead6503b37a4996d2288.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/37/d7/15/37d715e52abb67016c05d3511783cf9715775a9e.jpg?rule=ad-image",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/25/9e/dd/259edd850d6721615b832c8af3e4487ea2b76c94.jpg?rule=ad-image"
                    ],
                    "urls_thumb": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/3c/98/8a/3c988a6ead225dc0efc57002d818f5f54dd0b67e.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b7/5a/88/b75a88d5d237d5b8bea8b742e2470014caabff5c.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bf/37/a7/bf37a7db58d84852c4a6ead6503b37a4996d2288.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/37/d7/15/37d715e52abb67016c05d3511783cf9715775a9e.jpg?rule=ad-thumb",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/25/9e/dd/259edd850d6721615b832c8af3e4487ea2b76c94.jpg?rule=ad-thumb"
                    ],
                    "urls_large": [
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/3c/98/8a/3c988a6ead225dc0efc57002d818f5f54dd0b67e.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/b7/5a/88/b75a88d5d237d5b8bea8b742e2470014caabff5c.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/bf/37/a7/bf37a7db58d84852c4a6ead6503b37a4996d2288.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/37/d7/15/37d715e52abb67016c05d3511783cf9715775a9e.jpg?rule=ad-large",
                      "https://img.leboncoin.fr/api/v1/lbcpb1/images/25/9e/dd/259edd850d6721615b832c8af3e4487ea2b76c94.jpg?rule=ad-large"
                    ]
                  },
                  "attributes": [
                    {
                      "key": "activity_sector",
                      "value": "3",
                      "values": ["3"],
                      "value_label": "3",
                      "generic": false
                    },
                    {
                      "key": "stock_quantity",
                      "value": "1",
                      "values": ["1"],
                      "value_label": "1",
                      "generic": false
                    },
                    {
                      "key": "condition",
                      "value": "etatsatisfaisant",
                      "values": ["etatsatisfaisant"],
                      "key_label": "État",
                      "value_label": "État satisfaisant",
                      "generic": true
                    },
                    {
                      "key": "phone_brand",
                      "value": "apple",
                      "values": ["apple"],
                      "key_label": "Marque",
                      "value_label": "Apple",
                      "generic": true
                    },
                    {
                      "key": "phone_model",
                      "value": "iphone7",
                      "values": ["iphone7"],
                      "key_label": "Modèle",
                      "value_label": "iPhone 7",
                      "generic": true
                    },
                    {
                      "key": "phone_color",
                      "value": "noir",
                      "values": ["noir"],
                      "key_label": "Couleur",
                      "value_label": "Noir",
                      "generic": true
                    },
                    {
                      "key": "phone_memory",
                      "value": "32go",
                      "values": ["32go"],
                      "key_label": "Capacité de stockage",
                      "value_label": "32 Go",
                      "generic": true
                    },
                    {
                      "key": "new_item_price",
                      "value": "13900",
                      "values": ["13900"],
                      "value_label": "13900",
                      "generic": false
                    },
                    {
                      "key": "shippable",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "is_import",
                      "value": "false",
                      "values": ["false"],
                      "value_label": "false",
                      "generic": false
                    },
                    {
                      "key": "old_price",
                      "value": "139",
                      "values": ["139"],
                      "value_label": "139",
                      "generic": false
                    },
                    {
                      "key": "spare_parts_availability",
                      "value": "non_renseignee",
                      "values": ["non_renseignee"],
                      "key_label": "Disponibilité des pièces détachées",
                      "value_label": "Non renseignée",
                      "generic": true
                    }
                  ],
                  "location": {
                    "country_id": "FR",
                    "region_id": "12",
                    "region_name": "Ile-de-France",
                    "department_id": "75",
                    "department_name": "Paris",
                    "city_label": "Paris 75012 12e Arrondissement",
                    "city": "Paris",
                    "zipcode": "75012",
                    "lat": 48.8428,
                    "lng": 2.38605,
                    "source": "address",
                    "provider": "here",
                    "is_shape": false,
                    "feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [2.38605, 48.8428]
                      },
                      "properties": null
                    }
                  },
                  "owner": {
                    "store_id": "231459",
                    "user_id": "6023ed09-2fea-470e-830b-84771f689437",
                    "type": "pro",
                    "name": "UNIVACK",
                    "siren": "422991992",
                    "no_salesmen": false,
                    "activity_sector": "3"
                  },
                  "options": {
                    "has_option": true,
                    "booster": false,
                    "photosup": false,
                    "urgent": true,
                    "gallery": true,
                    "sub_toplist": true
                  },
                  "has_phone": true
                }
              ],
              "applied_condition": 0,
              "human_readable_applied_condition": "all_cat_12/2022_relevance_ranker_ipsv1"
            },
            "seoBoxColumns": [],
            "seoTopSearches": [],
            "seoPois": []
          },
          "initialReduxState": {
            "account": { "isFetching": false },
            "advertising": {
              "cleanedAt": 0,
              "habillage": {
                "isAdProgrammatic": false,
                "creativeId": "",
                "targetURL": "",
                "clickDelay": 0,
                "noGutter": false,
                "clickEnabled": true,
                "clickThrough": false,
                "isAdGreagre": false,
                "isAdHtmlGreagre": false,
                "isFixedGutter": false,
                "isStandardHb": false
              }
            },
            "app": {},
            "cart": { "isFetching": false, "items": [] },
            "contactedAds": { "ads": [], "shouldFetchContactedAds": true },
            "datalayer": { "event_name": "", "isUtagReady": false },
            "lbcData": {
              "searchParams": { "isFetching": false },
              "categories": { "isFetching": false }
            },
            "router": { "locationBeforeTransitions": null },
            "savedAd": { "isFetching": false, "ids": [] },
            "savedSearch": {
              "isFetching": false,
              "deleting": { "status": false },
              "editing": { "status": false }
            },
            "searchABTests": { "groups": {} },
            "ui": {
              "isMobile": false,
              "isSearchFormOpen": false,
              "layersCount": 0,
              "bodyClassNames": {
                "noScroll": false,
                "adSkin": false,
                "adSkinProgrammatic": false,
                "noGutter": false,
                "headerHidden": false
              },
              "scrollbarWidth": 0,
              "headerWithSearch": {
                "search": {
                  "limit": 35,
                  "limit_alu": 3,
                  "limit_sponsored": 1,
                  "sort_by": "relevance",
                  "sort_order": "desc",
                  "filters": { "enums": { "ad_type": ["offer"] } }
                }
              }
            },
            "user": {
              "isPro": false,
              "isImport": false,
              "isFetching": false,
              "isAuthenticated": null,
              "notifications": { "messaging": null },
              "picture": {
                "default": true,
                "small_url": "",
                "medium_url": "",
                "large_url": "",
                "extra_large_url": ""
              },
              "escrowRequiredFields": [],
              "mangopayRequiredFields": [],
              "scopes": [],
              "refusedScopes": []
            },
            "webview": { "isWebView": false },
            "credits": {},
            "unreadProjectsCount": { "unreadProjectsCount": 0 }
          }
        },
        "page": "/SearchListing",
        "query": { "text": "iphone 14" },
        "buildId": "4w8lrJmrtLaV8r-BlWpcc",
        "runtimeConfig": {
          "RUM_ENABLED": true,
          "RUM_BASE_URL": "https://api.leboncoin.fr",
          "THIRD_PARTIES": { "HOTJAR": { "ENABLED": true } },
          "FEATURES": {
            "CARTALOG_ENABLED": true,
            "PRO_HISTORY_REPORT_ENABLED": true,
            "NEW_P2P_VO": false,
            "AD_DEPOSIT_PRO": true,
            "CREATE_ACCOUNT_ENABLED": false,
            "DD_ENABLED": false,
            "MY_SHOPPING_ENABLED": false,
            "P2PPAYMENT_ENABLED": false,
            "BUYER_DEAL_LEGACY_PAYMENT_FORM_ENABLED": true,
            "VEHICLE_HOME_PAGE_INVITATION_BANNER_ENABLED": false,
            "VEHICLE_WARRANTY_SELECTION_V2": true,
            "VEHICLE_GET_AGREEMENT_V2": false,
            "VEHICLE_GPM_PATH_V2": true,
            "VEHICLE_GPM_PRICES_V3": true,
            "VEHICLE_SELLER_PAYMENT_V2": true,
            "DEFAULT_SKIN_ENABLED": false,
            "OAUTH_CALLBACK_LOGS": false,
            "BELGIAN_ACCOUNT_ENABLED": false,
            "HOLIDAYS_IMPORT_GOOGLE_ENABLED": false,
            "DIRECTDEAL_PRO_ENABLED": true,
            "PAGE_MARKER_ENABLED": false,
            "PREDEFINED_MSG_ENABLED": false,
            "PREDEFINED_MSG_BOTTOM_SHEET_ENABLED": true,
            "REALESTATE_CERTIFICATE": true,
            "RENTAL_MANAGEMENT_MULTI_UPLOAD_ENABLED": true,
            "RENTAL_MANAGEMENT_CONTENT_OFFER_ENABLED": false,
            "RENTAL_MANAGEMENT_FAKEDOOR_TABS": false,
            "RENTAL_MANAGEMENT_FAKEDOOR_LISTING_BLOCK": false,
            "RENTAL_MANAGEMENT_REDIRECT_KYC": false,
            "REPUSH_CONSENT_ENABLED": false,
            "JOB_ENABLE_SAVED_SEARCHES": false,
            "JOB_ENABLE_DIRECT_APPLY": true,
            "DEPOSIT_CLICK_AND_COLLECT_ENABLED": true,
            "DEPOSIT_CLICK_AND_COLLECT_DEPOSIT_ENABLED": true,
            "IMMERSIVE_CONVERSATION": false,
            "PAV_COMMERCIAL_LAUNCH_ENABLED": false,
            "PAYMENT_SELECTOR_V2": true,
            "PAYMENT_SELECTOR_V2_CREDITS": true,
            "PAYMENT_SELECTOR_V2_HOLIDAYS": true,
            "PAYMENT_SELECTOR_V2_BY_INSTALLMENTS_ONEY": true,
            "PAYMENT_ADVIEW_INSTALLMENTS": true,
            "PAYMENT_CREDIT_PURCHASE_PART_DISABLED": true,
            "PAYMENT_CONFIRMATION_V2_BDC_ENABLED": true,
            "REALESTATE_NEWHOUSING_MULTY_APPLY_ENABLED": true,
            "REALESTATE_PRO_PROSPECTING_TAB_ENABLED": true,
            "REALESTATE_PART_ABCDTEST_BANNER_LISTING": false,
            "AUTOPROMO_HEADER_BANNER": true,
            "AUTOPROMO_SEARCH_FORM_SUPERSCRIPT": false,
            "PRO_PAGE_TRUST_RATING_ENABLED": false,
            "EVENT_LANDING_FROM_API_ENABLED": false,
            "PRO_MARKETPLACE_DEPOSIT_ENABLED": false,
            "PART_BFF_ENABLED": true,
            "CALL_TO_ATINTERNET_ENABLED": false,
            "SELLER_FEES_ENABLED": true,
            "BDC_BUNDLES_ENABLED": false,
            "BDC_BUNDLES_CREATE_ENABLED": true,
            "BDC_BUNDLES_LIST_ENABLED": true,
            "BDC_BUNDLES_GET_ENABLED": true,
            "BDC_BUNDLES_AD_BUTTON_ENABLED": false,
            "BDC_BUNDLES_SELLER_BUTTON_ENABLED": false,
            "BDC_MR_LOCKERS": false,
            "BDC_TRUSTPILOT": false,
            "ENABLE_REFERRAL_PAGE": false,
            "ENABLE_WALL_PROVIDE_PHONE": true,
            "CONNECTION_AND_SECURITY_V2_ENABLED": false,
            "BDC_SHOP2SHOP": false,
            "REAL_ESTATE_TRENDS_ENABLED": false,
            "JOB_CANDIDATE_RESUME_ENABLED": true,
            "TOP_CAT_EDITO_ENABLED": false
          },
          "PAYMENT_INSTALLMENTS_OPERATION": {
            "startDate": "2022-11-15T00:00:00Z",
            "endDate": "2022-12-13T00:00:00Z"
          },
          "ADYEN": {
            "ADYEN_SCRIPT_SRC_P2P": "https://live.adyen.com/hpp/cse/js/4115318382451111.shtml",
            "KEY_P2P": "10001|A94FFF35C60A2F4BEFC475321586A68F352A7B648A3EA41F4415B85FFE9ED789745C7D7577449FF79635825A5F178E4499C16133811179389190D84283C24AC4355B474D18D442A8B52471E22F3153A9CCA7C0E5D081E12558089CB7FCCB9299CE5702924D4C197D9041DDA49BD3CFA591F20F6E129089DCDC9CD39BA99E0A14035291B4EA028BE6FF62CB3ECB4E033FFA38693A68107254A00CA5B4BC0CC0392EB3743A69FA1C8B6F18C4AD59EBC34EC630F9D100B00D2F909A3C31A09BEA62B59679C1E99346EC3CE7DFE146105D131B417425F59D5EC6CBFBFE3826381589501ECB69B75985B6CD8D95FABF907B8C742A7FBD7CDEAC2A7272C48EEAFC446F",
            "ADYEN_SCRIPT_SRC_PRIVATE": "https://live.adyen.com/hpp/cse/js/4115335573263758.shtml",
            "KEY_PRIVATE": "10001|92BB95D348DB40D8F6D73F69B32ADD4DA86FF4F697BE1B2D66F75C26952537BBA6E3EBA5DE2DCECB40515CD953096A9F58D2DF6B30DBA702D87DFA72EBAB399B08559EE486975C4C205B4940E703D8469D31C83C76B7E6C55BCE1C6C47E95AA3DC454735F2306032314B4AA4DD749106FA06A24F3318ACBD25DDC7C910EFA7682B771A654B8B8868FAE785DE8E928FE977CC7463D4FCDB73CB1EACDD3F47CEBBD4DD1B22FAB9E03DDF4EB556603C822A456957593B8870ED162ADDDA983B2CDC8AC079B02E384CA197FEA5C590A481B88B697508123611BCB1ECFA3C242AC251ACBA0E06F8943A0568120A07923820F7F39C9ED5EF206322E6265A7E99B2E48F",
            "ADYEN_SCRIPT_SRC_PRO": "https://live.adyen.com/hpp/cse/js/4115335573263758.shtml",
            "KEY_PRO": "10001|92BB95D348DB40D8F6D73F69B32ADD4DA86FF4F697BE1B2D66F75C26952537BBA6E3EBA5DE2DCECB40515CD953096A9F58D2DF6B30DBA702D87DFA72EBAB399B08559EE486975C4C205B4940E703D8469D31C83C76B7E6C55BCE1C6C47E95AA3DC454735F2306032314B4AA4DD749106FA06A24F3318ACBD25DDC7C910EFA7682B771A654B8B8868FAE785DE8E928FE977CC7463D4FCDB73CB1EACDD3F47CEBBD4DD1B22FAB9E03DDF4EB556603C822A456957593B8870ED162ADDDA983B2CDC8AC079B02E384CA197FEA5C590A481B88B697508123611BCB1ECFA3C242AC251ACBA0E06F8943A0568120A07923820F7F39C9ED5EF206322E6265A7E99B2E48F",
            "ADYEN_SCRIPT_SRC_LDV": "https://live.adyen.com/hpp/cse/js/4115433199970706.shtml",
            "KEY_LDV": "10001|FA21D1E03356EBAE421EB0665C9418B43E43D57A79EF5C45B5AE6B284ABEDA4011B40F7635B45DBBC26516451CA0B21A9D3314E458A6C382E286E93252AD4DC4A757F072EBE768B95F61CC1016751B24F7625D6122C144E524A6410B729EE88DF83460BBAC26EE5FC96327E69206F1CFF9364AFB657BAB32AC1008C53829746067EE3E9BFF191D006E57BDD09CD7C312C8DDD40152CD0934A2D6B9DD50B2C33B6E8E205E92E391B92E0A2C866703FA2B581AC7C48A54224C4D4789E550D045CF7F6C1BE2997BD96500E42D9B1DEF2512E58269559487FF447DD9D4AFB39AD97FCF85516B9041A024F17FBA69B9A20F69FADE4EBD3372A3A1CF4BB6B2FE45498D",
            "ADYEN_SCRIPT_SRC_LDV_LBC": "https://test.adyen.com/hpp/cse/js/1115984525703258.shtml",
            "KEY_LDV_LBC": "10001|E32874309B3FED0E8FF7A3BC4DEE4D77FA8516F9785E794E70988BF84AEAE3A421983DA9D5414AF4936805920DB234495859DDA7DD9C3488BCA18742F2BD73941B99ACC4436566B1BD186D07EE92336D3F8353EA07877F69E61676D888052ADDF31D54F1DDD86A224645DECCB7979F355451F3F001A170F5F4D01B45D7FEA4AAAA17A945728B544FBBF9BDD310389168D3C8260CD8D24C49D82149E52E2BE3CFB588C4EE3685A520B70AA3A9BC06DA56EDCA7333B3091308BA58BF183EEA54D9279EC6C3C6DAB241783B86DFF73B0EA96536A9C3BB414E8097E661DD5708354ADAF0B17B9BD26C9F6453D915BFBEE06DCA726CBE2E2696304829B115D20C3593",
            "ADYEN_SCRIPT_SRC_AUTO": "https://live.adyen.com/hpp/cse/js/1115755359251428.shtml",
            "KEY_AUTO": "10001|E51BC84041ADFE9F9CDB933053E69E87D436FEDD55B6F86DE8D4AB2108DADCDECF8EF21D0E98020FD2F8DCA647E82C2CD8BE0720E401F24044EF23A65ACC73B4E712F2D900CB84C69C5F53160C484F6519352685871980BA3FE3131E35607C8FE108E104F0CB2DC4C96DDA13B5168DD320558A3C2A86AC972F721B8D4205F343B48D96218541FF29F549626BAE23A83E9A7B064B653418171FC445FA9B326B8D263611CCCE9B16CCBA4626C503C40352FC0496A29260ED8F71F795FD42DEA152B7CEE53D7C8FC5C8CE1DF6523D679203346BABE7F0C0BD554FD27A86DC19A8C27DAE42702FAB95C40403A84713F33746FA3D167D9D76DA744AA1616766FD981D"
          },
          "LBC_CONNECT": {
            "URL": "https://auth.leboncoin.fr",
            "CLIENT_ID": "lbc-front-web",
            "ACCOUNT_PRO": "lbclegacy.pro",
            "ACCESS_TOKEN_PATH": "/api/authorizer/v2/token",
            "AUTHORIZATION_PATH": "/api/authorizer/v2/authorize",
            "LOGOUT_PATH": "/api/authenticator/v1/users/logout",
            "POST_LOGIN_ACTION": "lbc-post-login"
          },
          "API": {
            "URL": "https://api.leboncoin.fr",
            "TRUST_REPUTATION_URL": "https://profile-api-lbc.trust-pro.mpi-internal.com",
            "TRUST_REPUTATION_FEEDBACK_URL": "https://feedback-api-lbc.trust-pro.mpi-internal.com",
            "TRUST_PRESENCE_URL": "https://presence-api.trust-pro.mpi-internal.com",
            "KEY": "ba0c2dad52b3ec",
            "KEY_JSON": "54bb0281238b45a03f0ee695f73e704f",
            "AVAL": "https://api.pro-immobilier.leboncoin.fr/lbc/secured",
            "LBCIN": "https://api.immobilierneuf.leboncoin.fr",
            "PANDA": "https://panda-stats.panda-pro.advgo.net"
          },
          "HOUSTON": {
            "applicationId": "lbc-rav-next",
            "tenant": "leboncoin",
            "providerId": "sdrn:schibsted:client:leboncoin",
            "environment": "pro"
          },
          "ASSET_PREFIX": "//rav-next-static.leboncoin.fr",
          "BASE_URL": "https://www.leboncoin.fr",
          "COOKIE_DOMAIN": ".leboncoin.fr",
          "FAQ_URL": "https://assistance.leboncoin.info/hc/fr",
          "LEGACY_ACCOUNT_URL": "https://compteperso.leboncoin.fr",
          "LEGACY_ACCOUNT_PRO_URL": "https://comptepro.leboncoin.fr",
          "HERE_PROXY_URL": "https://proxytile-{s}.leboncoin.fr/maptile/2.1/{type}/{mapID}/{scheme}/{z}/{x}/{y}/{size}/{format}?lg={language}",
          "AUTHORIZED_MAP_PROVIDERS": ["here"],
          "RENEGO_PRIX_URL": "https://services.pro-immobilier.leboncoin.fr/renegociation?id={lbcId}",
          "APP_NEXUS_MEMBER_ID": 3296,
          "TEALIUM_SCRIPT_URL": "//tags.tiqcdn.com/utag/schibsted/leboncoin-responsive/prod/utag.js",
          "TEALIUM_SCRIPT_URL_WEBVIEW": "//tags.tiqcdn.com/utag/schibsted/leboncoin-mobile/prod/utag.js",
          "SMART_TAG_ID": 562498,
          "NEW_SMART_TAG_ID": 619756,
          "ROLLBAR_ENV": "production:rav-next",
          "DATADOME_ON_FETCH_ENABLED": true,
          "DATADOME_URL": "//dd.leboncoin.fr/tags.js",
          "DATADOME_ENDPOINT": "//dd.leboncoin.fr/js/",
          "LICENSE_PLATE_OPEN_CATEGORIES": {
            "private": ["2", "5"],
            "pro": ["2", "5"]
          },
          "OWNER_STORE_IDS": {
            "NEWHOUSING": "40479397",
            "LOCASUN": "45554190",
            "PILGO": "55041617"
          },
          "JOB_ENABLE_RESUME_DB_FILTERS": false,
          "NEW_AD_VO_OPTIN_CATEGORIES": ["2", "3", "4", "5", "7"],
          "MESSAGING_PRO_USER_ACTIVITY_SECTOR_BLACKLIST": [2, 8],
          "ESCROW_POLLING_TIME": 600000,
          "BALEEN_ENABLED": true,
          "BALEEN_TID": "n4h5BCQcbK",
          "BALEEN_SW": "bsw-prod.js",
          "BATCH": {
            "APIKEY": "F4E3EA06B8214F69B162F2137A32A52A",
            "SUBDOMAIN": "leboncoin",
            "AUTHKEY": "2.KLSDDMz9WL6v5v36lXQqsTQmkkPAhKSY0DOL2YYTAwE=",
            "DEV": false,
            "VAPIDPUBLICKEY": "BGtYtIIf9gBd0gUcu9aysq7+5G5Z2UZ3vTUGwBj2WYHB0dSNr51zV2Xrt4s+7a/Sb8/Kymj8KGHpuIqVKTzT5yY="
          },
          "MICRO_FRONTENDS": {
            "@rav/example": { "enabled": false },
            "@rav/messaging": { "enabled": true }
          },
          "DATADOME_ENABLED": true,
          "EMPLOI_CADRE_STORE_ID": "39890991",
          "MAPBOX_ACCESS_TOKEN": "pk.eyJ1IjoiZnRtYXBzdGVhbSIsImEiOiJjazZtNDJrZG0wanpoM21wYW9zb2F1Z3FzIn0.H3UcG4gJPAk1v3cqiHAMqA"
        },
        "isFallback": false,
        "dynamicIds": [1303, 52585],
        "customServer": true,
        "gip": true,
        "appGip": true,
        "scriptLoader": []
      }
    </script>
  </body>
</html>`;

export default htmlString;
