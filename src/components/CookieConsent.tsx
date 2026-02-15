"use client"

import { useEffect } from "react"

import * as CookieConsent from "vanilla-cookieconsent"

import "vanilla-cookieconsent/dist/cookieconsent.css"

export function CookieConsentInit() {
  useEffect(() => {
    CookieConsent.run({
      // mode: 'opt-in',
      // revision: 0,

      cookie: {
        name: "cc_cookie",
        // expiresAfterDays: 182,
      },

      guiOptions: {
        consentModal: {
          layout: "cloud inline",
          position: "bottom center",
          equalWeightButtons: false,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: false,
          flipButtons: true,
        },
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [
              {
                name: /^_ga/,
              },
              {
                name: "_gid",
              },
            ],
          },

          services: {
            ga: {
              label: "Google Analytics",
              onAccept: () => {},
              onReject: () => {},
            },
          },
        },
        ads: {},
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "Cookies",
              description:
                "We use cookies to enhance your experience, remember your preferences, and analyze site traffic. By continuing to use our site, you consent to our use of cookies.",
              acceptAllBtn: "Accept All",
              acceptNecessaryBtn: "Reject All",
              showPreferencesBtn: "Manage Cookies",
            },
            preferencesModal: {
              title: "Cookie Preferences Center",
              acceptAllBtn: "Accept All",
              acceptNecessaryBtn: "Reject All",
              savePreferencesBtn: "Save Choices",
              closeIconLabel: "Close modal",
              serviceCounterLabel: "Service|Services",
              sections: [
                {
                  title: "",
                  description:
                    "Here you can view and manage the different types of cookies we use. You can choose to accept or reject specific categories of cookies based on your preferences. Please note that rejecting certain types of cookies may impact your experience on our website.",
                },
                {
                  title:
                    'Strictly Necessary <span class="pm__badge">Always Enabled</span>',
                  description:
                    "These cookies are essential for the proper functioning of the website and cannot be disabled.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Performance and Analytics",
                  description:
                    "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                  linkedCategory: "analytics",
                  cookieTable: {
                    caption: "",
                    headers: {
                      name: "Cookie",
                      domain: "Domain",
                      description: "Description",
                      expiration: "Expiration",
                    },
                    body: [
                      {
                        name: "_ga",
                        domain: location.hostname,
                        description: "Cookie set by Google Analytics",
                        expiration: "Expires after 12 days",
                      },
                      {
                        name: "_gid",
                        domain: location.hostname,
                        description: "Cookie set by Google Analytics",
                        expiration: "Session",
                      },
                    ],
                  },
                },
                {
                  title: "Targeting and Advertising",
                  description:
                    "These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.",
                  linkedCategory: "ads",
                },
                {
                  title: "More information",
                  description:
                    "If you have any questions regarding cookie policies and your choices, please send an email to the address provided in the privacy policy.",
                },
              ],
            },
          },
        },
      },
    })
  }, [])

  return null
}
