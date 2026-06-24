export type Step = {
  file: string;
  n: number;
  fase: string;
  quem: string;
  saida: string;
};

export type Partner = {
  label: string;
};

export const STEPS: Step[] = [
  { file: "01_inscricao.json", n: 1, fase: "Inscrição", quem: "qualquer nível", saida: "perfil criado" },
  { file: "02_equipes.json", n: 2, fase: "Formação de equipes", quem: "devs + design + ideias", saida: "squad montado" },
  { file: "03_hackathon.json", n: 3, fase: "Hackathon", quem: "48h de código", saida: "mvp funcional" },
  { file: "04_entrega.json", n: 4, fase: "Entrega", quem: "pitch + demo ao vivo", saida: "projeto publicado" },
  { file: "05_premiacao.json", n: 5, fase: "Premiação", quem: "banca + comunidade", saida: "impacto reconhecido" },
];

export const ROLES: string[] = [
  "dev",
  "designer",
  "analista",
  "estudante",
  "product",
  "quem nunca programou",
];

export const PARTNERS: Partner[] = [
  { label: "// sua marca" },
  { label: "// apoiador" },
  { label: "// parceiro" },
  { label: "// patrocínio" },
  { label: "// coletivo" },
  { label: "// instituição" },
  { label: "// sua marca" },
  { label: "// apoiador" },
];

export async function getSteps(): Promise<Step[]> {
  return STEPS;
}

export async function getRoles(): Promise<string[]> {
  return ROLES;
}

export async function getPartners(): Promise<Partner[]> {
  return PARTNERS;
}
