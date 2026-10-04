// Site data — single source of truth for all content
export interface SiteData {
  name: string;
  designation: string;
  enrolmentNumber: string;
  enrolmentBody: string;
  enrolmentYear: string;

  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  areas: {
    civil: string;
    family: string;
    commercial: string;
    documentation: string;
  };
}

export const site: SiteData = {
  name: "Yashita Rajput",
  designation: "Advocate",
  enrolmentNumber: "D/6409/2026",
  enrolmentBody: "Bar Council of Delhi",
  enrolmentYear: "2026",
  phone: "+919811131750",
  whatsapp: "919811131750",
  email: "yashitarajput47@gmail.com",
  instagram: "adv_yashita.rajput",
  areas: {
    civil: "Disputes, suits, and civil matters before trial and appellate courts.",
    family: "Divorce, custody, maintenance, and domestic matters.",
    commercial: "Contract disputes, recovery, and commercial agreements.",
    documentation: "Drafting of agreements, affidavits, notices, and legal deeds.",
  },
};
