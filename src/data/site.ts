// Site data — single source of truth for all content
export interface SiteData {
  name: string;
  designation: string;
  enrolmentNumber: string;
  enrolmentBody: string;
  enrolmentYear: string;
  degree: string;
  courts: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  ogImage: string;
  areas: {
    civil: string;
    criminal: string;
    family: string;
    documentation: string;
  };
}

export const site: SiteData = {
  name: "Yashita Rajput",
  designation: "Advocate",
  enrolmentNumber: "D/6409/2026",
  enrolmentBody: "Bar Council of Delhi",
  enrolmentYear: "2026",
  degree: "", // e.g. "LLB, University of Delhi"
  courts: "", // e.g. "District Courts, Delhi"
  phone: "+919811131750",
  whatsapp: "919811131750",
  email: "yashitarajput47@gmail.com",
  instagram: "adv_yashita.rajput",
  ogImage: "", // path to og image in public/, e.g. "/og-image.jpg"
  areas: {
    civil: "Disputes, suits, and civil matters before trial and appellate courts.",
    commercial: "Contracts, agreements, disputes, and advisory for business transactions.",
    family: "Divorce, custody, maintenance, and domestic matters.",
    documentation: "Drafting of agreements, affidavits, notices, and legal deeds.",
  },
};
