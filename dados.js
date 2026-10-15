/* =========================================================
   dados-paulista.js — SOMENTE DADOS da Prova Paulista
   ---------------------------------------------------------
   Fonte: exports do Escola Total (prova física, URE São José do Rio Preto).
   Valores em PERCENTUAL (0 a 100). Componente sem nota = não aparece
   (o painel mostra "Sem dado", nunca zero).

   - ure ........... total da URE em cada bimestre (todas as escolas do export)
   - resultados .... escolas REGULARES do painel, por código, por bimestre
   - O 1º bimestre ainda está só no total da URE (o export por escola
     não foi enviado). Quando chegar, é só incluir "1: { ... }" em cada escola.
   ========================================================= */

const PAULISTA = {
  metaPercentual: 50,      // linha de corte do ">= 50%"
  pesoQueda: 2,            // no "ponto de atenção", cada ponto de queda pesa 2x
  grauRegressao: {         // classificação da queda (em pontos percentuais)
    leve: 2,               // queda até 2 p.p.  = Leve
    moderada: 5            // de 2 a 5 p.p.     = Moderada | acima de 5 = Forte
  },
  nomesBimestres: { 1: "1º Bimestre", 2: "2º Bimestre", 3: "3º Bimestre" },

  // Nome de cada sigla do export (ajuste aqui se algum nome estiver diferente)
  nomesComponentes: {
    MAT: "Matemática", PORT: "Língua Portuguesa", ING: "Inglês", HIST: "História",
    GEO: "Geografia", CIE: "Ciências", FILO: "Filosofia", SOC: "Sociologia",
    BIO: "Biologia", "FÍS": "Física", QUI: "Química", FIN: "Educação Financeira",
    TEC: "Tecnologia e Inovação"
  },

  /* ---------- Total da URE por bimestre ---------- */
  ure: {
    1: { alunos: 31884, participacao: 95.25, geral: 49.13,
      componentes: { "MAT": 38.52, "PORT": 56.3, "ING": 52.78, "HIST": 50.04, "GEO": 54.9, "CIE": 47.89, "FILO": 45.53, "SOC": 48.18, "BIO": 47.08, "FÍS": 37.15, "QUI": 43.97, "FIN": 59.53, "TEC": 56.02 } },
    2: { alunos: 31224, participacao: 94.99, geral: 46.61,
      componentes: { "MAT": 40.9, "PORT": 52.56, "ING": 48.54, "HIST": 44.84, "GEO": 50.21, "CIE": 47.13, "FILO": 40.8, "SOC": 56.8, "BIO": 48.47, "FÍS": 40.63, "QUI": 38.79, "FIN": 46.96, "TEC": 39.91 } },
    3: { alunos: 30471, participacao: 93.46, geral: 52.97,
      componentes: { "MAT": 50.77, "PORT": 61.1, "ING": 50.72, "HIST": 47.48, "GEO": 52.39, "CIE": 48.84, "FILO": 41.27, "SOC": 44.92, "BIO": 53.13, "FÍS": 45.28, "QUI": 43.93, "FIN": 55.42, "TEC": 42.72 } }
  },

  /* ---------- Escolas regulares do painel (2º e 3º bimestre) ---------- */
  resultados: {
    // PEDRO ELIAS PROFESSOR
    "28836": {
      2: { alunos: 210, participacao: 96.76, geral: 39.59,
        componentes: { "MAT": 32.39, "PORT": 45.74, "ING": 41.78, "HIST": 35.57, "GEO": 52.36, "FILO": 29.73, "SOC": 58.02, "BIO": 42.23, "FÍS": 34.88, "QUI": 36.81, "FIN": 38.04 } },
      3: { alunos: 203, participacao: 94.04, geral: 50.43,
        componentes: { "MAT": 41.73, "PORT": 58.33, "ING": 49.32, "HIST": 44.07, "GEO": 52.97, "FILO": 32.5, "SOC": 49.62, "BIO": 48.7, "FÍS": 37.78, "QUI": 40.92, "FIN": 61.49 } }
    },
    // IRMAOS ISMAEL
    "27765": {
      2: { alunos: 430, participacao: 95.21, geral: 45.8,
        componentes: { "MAT": 37.6, "PORT": 55.24, "ING": 52.07, "HIST": 44.52, "GEO": 49.92, "CIE": 41.83, "FILO": 30.53, "SOC": 72.0, "BIO": 44.08, "FÍS": 30.67, "QUI": 37.76, "FIN": 46.31, "TEC": 41.45 } },
      3: { alunos: 409, participacao: 97.22, geral: 52.88,
        componentes: { "MAT": 47.69, "PORT": 64.91, "ING": 63.53, "HIST": 45.0, "GEO": 55.57, "CIE": 49.85, "FILO": 31.13, "SOC": 38.57, "BIO": 41.59, "FÍS": 30.64, "QUI": 26.7, "FIN": 52.9, "TEC": 56.2 } }
    },
    // CARLOS CASTILHO PROFESSOR
    "28241": {
      2: { alunos: 627, participacao: 89.1, geral: 39.62,
        componentes: { "MAT": 36.03, "PORT": 42.43, "ING": 42.43, "HIST": 36.13, "GEO": 50.86, "FILO": 32.08, "SOC": 53.94, "BIO": 45.3, "FÍS": 34.38, "QUI": 31.62, "FIN": 42.3 } },
      3: { alunos: 601, participacao: 86.41, geral: 42.67,
        componentes: { "MAT": 35.55, "PORT": 49.59, "ING": 41.01, "HIST": 43.82, "GEO": 45.95, "FILO": 33.61, "SOC": 36.63, "BIO": 37.91, "FÍS": 29.02, "QUI": 28.92, "FIN": 48.59 } }
    },
    // ZULMIRA DA SILVA SALLES PROFESSORA
    "28605": {
      2: { alunos: 605, participacao: 98.0, geral: 45.84,
        componentes: { "MAT": 37.05, "PORT": 54.93, "ING": 50.05, "HIST": 44.15, "GEO": 46.6, "CIE": 44.1, "FIN": 46.17, "TEC": 38.18 } },
      3: { alunos: 582, participacao: 96.58, geral: 49.4,
        componentes: { "MAT": 44.21, "PORT": 62.68, "ING": 55.12, "HIST": 39.95, "GEO": 45.08, "CIE": 47.29, "FIN": 47.33, "TEC": 36.1 } }
    },
    // AUREA DE OLIVEIRA PROFESSORA
    "28666": {
      2: { alunos: 1052, participacao: 98.61, geral: 45.66,
        componentes: { "MAT": 40.03, "PORT": 50.72, "ING": 44.16, "HIST": 41.96, "GEO": 57.31, "CIE": 49.99, "FILO": 45.04, "SOC": 60.25, "BIO": 46.89, "FÍS": 36.69, "QUI": 38.39, "FIN": 46.76, "TEC": 41.57 } },
      3: { alunos: 1035, participacao: 96.62, geral: 51.1,
        componentes: { "MAT": 48.8, "PORT": 58.11, "ING": 47.0, "HIST": 45.72, "GEO": 53.94, "CIE": 49.99, "FILO": 38.51, "SOC": 40.64, "BIO": 49.12, "FÍS": 40.63, "QUI": 38.29, "FIN": 56.89, "TEC": 42.54 } }
    },
    // ALZIRA SALOMAO PROFESSORA
    "917291": {
      2: { alunos: 471, participacao: 99.32, geral: 50.87,
        componentes: { "MAT": 42.24, "PORT": 56.07, "ING": 53.77, "HIST": 51.92, "GEO": 48.7, "CIE": 55.73, "FIN": 56.36, "TEC": 38.67 } },
      3: { alunos: 460, participacao: 98.98, geral: 57.55,
        componentes: { "MAT": 49.79, "PORT": 63.93, "ING": 56.18, "HIST": 55.81, "GEO": 58.92, "CIE": 59.8, "FIN": 59.08, "TEC": 52.08 } }
    },
    // PARQUE NOVA ESPERANCA
    "565064": {
      2: { alunos: 730, participacao: 96.21, geral: 41.68,
        componentes: { "MAT": 40.65, "PORT": 43.79, "ING": 40.89, "HIST": 38.77, "GEO": 39.17, "CIE": 45.64, "FILO": 35.25, "SOC": 49.53, "BIO": 44.02, "FÍS": 37.24, "QUI": 38.7, "FIN": 44.3, "TEC": 42.06 } },
      3: { alunos: 694, participacao: 94.17, geral: 49.37,
        componentes: { "MAT": 50.3, "PORT": 54.62, "ING": 45.96, "HIST": 43.96, "GEO": 46.5, "CIE": 47.82, "FILO": 42.14, "SOC": 54.81, "BIO": 51.48, "FÍS": 43.11, "QUI": 43.09, "FIN": 52.84, "TEC": 43.22 } }
    },
    // CLEMENTE MARTON SEGURA PADRE
    "28745": {
      2: { alunos: 1046, participacao: 94.97, geral: 40.8,
        componentes: { "MAT": 32.96, "PORT": 49.01, "ING": 44.4, "HIST": 41.8, "GEO": 46.38, "CIE": 37.1, "FILO": 38.18, "SOC": 43.96, "BIO": 36.43, "FÍS": 29.98, "QUI": 30.04, "FIN": 40.76, "TEC": 36.18 } },
      3: { alunos: 1050, participacao: 92.42, geral: 44.9,
        componentes: { "MAT": 42.19, "PORT": 56.22, "ING": 42.14, "HIST": 40.2, "GEO": 44.88, "CIE": 40.35, "FILO": 34.06, "SOC": 31.85, "BIO": 42.31, "FÍS": 34.02, "QUI": 31.31, "FIN": 48.63, "TEC": 40.08 } }
    },
    // PARQUE DAS AROEIRAS II
    "565052": {
      2: { alunos: 646, participacao: 96.69, geral: 46.18,
        componentes: { "MAT": 40.13, "PORT": 52.77, "ING": 45.89, "HIST": 47.21, "GEO": 50.24, "CIE": 44.32, "FILO": 38.64, "SOC": 53.33, "BIO": 46.91, "FÍS": 41.28, "QUI": 38.2, "FIN": 45.92, "TEC": 33.44 } },
      3: { alunos: 635, participacao: 96.09, geral: 54.05,
        componentes: { "MAT": 50.33, "PORT": 63.28, "ING": 52.48, "HIST": 49.75, "GEO": 52.1, "CIE": 46.56, "FILO": 37.83, "SOC": 53.9, "BIO": 58.64, "FÍS": 54.45, "QUI": 50.1, "FIN": 55.95, "TEC": 32.74 } }
    },
    // GONCALVES MONSENHOR
    "28708": {
      2: { alunos: 1132, participacao: 90.05, geral: 49.11,
        componentes: { "MAT": 44.29, "PORT": 50.68, "ING": 51.11, "HIST": 50.0, "GEO": 60.49, "FILO": 48.81, "SOC": 57.51, "BIO": 50.35, "FÍS": 46.58, "QUI": 42.26, "FIN": 51.56 } },
      3: { alunos: 1113, participacao: 88.48, geral: 58.47,
        componentes: { "MAT": 59.53, "PORT": 57.57, "ING": 51.1, "HIST": 54.91, "GEO": 54.74, "FILO": 48.71, "SOC": 45.05, "BIO": 60.13, "FÍS": 53.87, "QUI": 54.56, "FIN": 63.76 } }
    },
    // OSCAR DE BARROS SERRA DORIA DOUTOR
    "911461": {
      2: { alunos: 609, participacao: 89.78, geral: 45.32,
        componentes: { "MAT": 40.1, "PORT": 50.08, "ING": 46.12, "HIST": 46.66, "GEO": 45.0, "CIE": 46.24, "FILO": 45.97, "SOC": 52.12, "BIO": 46.98, "FÍS": 36.61, "QUI": 36.52, "FIN": 50.42, "TEC": 44.44 } },
      3: { alunos: 571, participacao: 94.69, geral: 48.71,
        componentes: { "MAT": 48.29, "PORT": 56.74, "ING": 49.72, "HIST": 43.67, "GEO": 47.6, "CIE": 46.01, "FILO": 37.6, "SOC": 51.82, "BIO": 43.54, "FÍS": 36.93, "QUI": 33.94, "FIN": 50.3, "TEC": 49.31 } }
    },
    // ALBERTO ANDALO
    "28538": {
      2: { alunos: 909, participacao: 92.19, geral: 43.68,
        componentes: { "MAT": 39.4, "PORT": 46.31, "ING": 45.14, "HIST": 40.86, "GEO": 54.91, "FILO": 38.58, "SOC": 59.08, "BIO": 46.77, "FÍS": 41.85, "QUI": 37.03, "FIN": 45.28 } },
      3: { alunos: 863, participacao: 91.41, geral: 55.01,
        componentes: { "MAT": 57.33, "PORT": 55.27, "ING": 47.7, "HIST": 47.95, "GEO": 52.79, "FILO": 42.11, "SOC": 45.93, "BIO": 58.07, "FÍS": 51.76, "QUI": 54.36, "FIN": 60.87 } }
    },
    // CELSO ABBADE MOURAO
    "918337": {
      2: { alunos: 974, participacao: 91.83, geral: 36.79,
        componentes: { "MAT": 30.69, "PORT": 42.64, "ING": 39.55, "HIST": 35.11, "GEO": 39.26, "CIE": 35.99, "FILO": 30.98, "SOC": 41.13, "BIO": 38.32, "FÍS": 28.9, "QUI": 31.93, "FIN": 40.92, "TEC": 36.03 } },
      3: { alunos: 906, participacao: 96.39, geral: 39.87,
        componentes: { "MAT": 36.37, "PORT": 50.36, "ING": 37.5, "HIST": 34.6, "GEO": 40.33, "CIE": 36.44, "FILO": 30.93, "SOC": 28.91, "BIO": 38.0, "FÍS": 27.87, "QUI": 24.71, "FIN": 42.33, "TEC": 35.16 } }
    },
    // BENTO ABELAIRA GOMES PROFESSOR
    "918313": {
      2: { alunos: 1207, participacao: 94.46, geral: 39.76,
        componentes: { "MAT": 33.53, "PORT": 47.22, "ING": 42.11, "HIST": 38.44, "GEO": 43.05, "CIE": 40.1, "FILO": 33.19, "SOC": 53.33, "BIO": 37.08, "FÍS": 31.59, "QUI": 29.87, "FIN": 39.84, "TEC": 32.9 } },
      3: { alunos: 1036, participacao: 91.34, geral: 49.06,
        componentes: { "MAT": 50.22, "PORT": 54.44, "ING": 41.13, "HIST": 40.54, "GEO": 41.98, "CIE": 45.05, "FILO": 30.51, "SOC": 32.66, "BIO": 51.74, "FÍS": 46.21, "QUI": 46.65, "FIN": 53.95, "TEC": 46.21 } }
    },
    // JOSE FELICIO MIZIARA PROFESSOR
    "28927": {
      2: { alunos: 997, participacao: 94.25, geral: 48.06,
        componentes: { "MAT": 39.22, "PORT": 56.08, "ING": 51.05, "HIST": 45.58, "GEO": 55.01, "CIE": 47.21, "FILO": 44.22, "SOC": 64.81, "BIO": 50.02, "FÍS": 43.65, "QUI": 39.23, "FIN": 44.39, "TEC": 46.33 } },
      3: { alunos: 991, participacao: 93.6, geral: 53.13,
        componentes: { "MAT": 50.62, "PORT": 62.34, "ING": 50.79, "HIST": 48.09, "GEO": 54.06, "CIE": 48.65, "FILO": 39.96, "SOC": 40.67, "BIO": 51.6, "FÍS": 42.14, "QUI": 41.2, "FIN": 55.45, "TEC": 41.72 } }
    },
    // ADAHIR GUIMARAES FOGACA PROFESSOR
    "28685": {
      2: { alunos: 890, participacao: 89.94, geral: 41.8,
        componentes: { "MAT": 36.29, "PORT": 48.35, "ING": 43.52, "HIST": 41.54, "GEO": 42.27, "CIE": 41.44, "FILO": 38.3, "SOC": 48.14, "BIO": 39.66, "FÍS": 37.33, "QUI": 36.62, "FIN": 42.71, "TEC": 33.0 } },
      3: { alunos: 830, participacao: 91.88, geral: 48.38,
        componentes: { "MAT": 47.57, "PORT": 55.79, "ING": 46.07, "HIST": 44.71, "GEO": 45.47, "CIE": 42.81, "FILO": 39.88, "SOC": 30.13, "BIO": 52.17, "FÍS": 47.14, "QUI": 45.72, "FIN": 47.78, "TEC": 36.78 } }
    },
    // NOEMIA BUENO DO VALLE PROFESSORA
    "28551": {
      2: { alunos: 830, participacao: 98.57, geral: 49.55,
        componentes: { "MAT": 39.12, "PORT": 58.8, "ING": 57.96, "HIST": 46.15, "GEO": 51.04, "CIE": 49.26, "FIN": 50.37, "TEC": 39.16 } },
      3: { alunos: 805, participacao: 97.72, geral: 53.62,
        componentes: { "MAT": 46.48, "PORT": 67.86, "ING": 58.9, "HIST": 43.96, "GEO": 52.98, "CIE": 49.66, "FIN": 51.92, "TEC": 41.9 } }
    },
    // MARIA DE LOURDES MURAD DE CAMARGO PROFESSORA
    "907169": {
      2: { alunos: 628, participacao: 95.44, geral: 53.89,
        componentes: { "MAT": 56.31, "PORT": 51.97, "ING": 61.36, "HIST": 49.23, "GEO": 48.25, "CIE": 64.17, "FIN": 40.38, "TEC": 37.32 } },
      3: { alunos: 625, participacao: 94.15, geral: 54.45,
        componentes: { "MAT": 52.24, "PORT": 65.12, "ING": 50.24, "HIST": 49.83, "GEO": 51.38, "CIE": 52.88, "FIN": 43.15, "TEC": 40.97 } }
    },
    // DINORATH DO VALLE PROFESSORA
    "436239": {
      2: { alunos: 1000, participacao: 97.14, geral: 49.12,
        componentes: { "MAT": 43.46, "PORT": 56.99, "ING": 49.1, "HIST": 45.01, "GEO": 54.02, "CIE": 47.35, "FILO": 43.51, "SOC": 55.44, "BIO": 52.83, "FÍS": 43.38, "QUI": 42.72, "FIN": 50.38, "TEC": 38.4 } },
      3: { alunos: 1011, participacao: 95.37, geral: 51.7,
        componentes: { "MAT": 48.56, "PORT": 63.39, "ING": 51.94, "HIST": 45.41, "GEO": 54.27, "CIE": 49.25, "FILO": 45.95, "SOC": 47.38, "BIO": 45.54, "FÍS": 37.04, "QUI": 35.25, "FIN": 55.91, "TEC": 39.23 } }
    },
    // FRANCISCO PURITA PROFESSOR
    "28617": {
      2: { alunos: 623, participacao: 96.27, geral: 45.2,
        componentes: { "MAT": 42.24, "PORT": 47.86, "ING": 46.68, "HIST": 40.87, "GEO": 43.7, "CIE": 44.85, "FILO": 36.67, "SOC": 73.81, "BIO": 50.13, "FÍS": 47.18, "QUI": 47.51, "FIN": 50.8, "TEC": 46.71 } },
      3: { alunos: 612, participacao: 92.7, geral: 53.83,
        componentes: { "MAT": 52.0, "PORT": 59.93, "ING": 48.98, "HIST": 47.31, "GEO": 49.05, "CIE": 42.25, "FILO": 48.78, "SOC": 54.0, "BIO": 68.62, "FÍS": 61.76, "QUI": 64.5, "FIN": 59.88, "TEC": 42.96 } }
    },
    // DARCY FEDERICI PACHECO PROFESSOR
    "914411": {
      2: { alunos: 857, participacao: 92.99, geral: 47.54,
        componentes: { "MAT": 46.73, "PORT": 52.72, "ING": 50.84, "HIST": 48.44, "GEO": 46.36, "CIE": 42.8, "FILO": 40.03, "SOC": 59.86, "BIO": 45.73, "FÍS": 46.81, "QUI": 38.51, "FIN": 41.07, "TEC": 31.19 } },
      3: { alunos: 844, participacao: 89.35, geral: 58.45,
        componentes: { "MAT": 59.16, "PORT": 61.93, "ING": 59.2, "HIST": 55.04, "GEO": 54.52, "CIE": 51.04, "FILO": 49.91, "SOC": 59.08, "BIO": 58.4, "FÍS": 56.42, "QUI": 49.42, "FIN": 54.58, "TEC": 48.47 } }
    },
    // AURELIANO MENDONCA PROFESSOR
    "35828": {
      2: { alunos: 450, participacao: 89.84, geral: 42.69,
        componentes: { "MAT": 34.37, "PORT": 48.54, "ING": 46.16, "HIST": 42.0, "GEO": 47.52, "CIE": 40.15, "FILO": 38.04, "SOC": 55.25, "BIO": 51.55, "FÍS": 39.45, "QUI": 37.3, "FIN": 43.35, "TEC": 37.91 } },
      3: { alunos: 420, participacao: 89.45, geral: 54.86,
        componentes: { "MAT": 50.19, "PORT": 62.48, "ING": 53.17, "HIST": 50.91, "GEO": 53.79, "CIE": 46.98, "FILO": 51.23, "SOC": 41.41, "BIO": 50.39, "FÍS": 48.39, "QUI": 47.94, "FIN": 55.8, "TEC": 53.23 } }
    },
    // WALDEMIRO NAFFAH DOUTOR
    "908150": {
      2: { alunos: 1097, participacao: 90.08, geral: 44.37,
        componentes: { "MAT": 41.18, "PORT": 50.25, "ING": 47.06, "HIST": 44.0, "GEO": 43.35, "CIE": 42.35, "FILO": 31.9, "SOC": 50.0, "BIO": 41.72, "FÍS": 46.35, "QUI": 32.32, "FIN": 41.38, "TEC": 34.92 } },
      3: { alunos: 1041, participacao: 92.33, geral: 50.91,
        componentes: { "MAT": 53.27, "PORT": 58.23, "ING": 44.49, "HIST": 43.51, "GEO": 43.59, "CIE": 45.97, "FILO": 27.06, "SOC": 49.7, "BIO": 52.37, "FÍS": 49.74, "QUI": 44.01, "FIN": 48.74, "TEC": 37.91 } }
    },
    // ALZIRA VALLE ROLEMBERG PROFESSORA
    "908149": {
      2: { alunos: 1115, participacao: 97.45, geral: 46.53,
        componentes: { "MAT": 40.99, "PORT": 53.28, "ING": 47.2, "HIST": 44.03, "GEO": 50.58, "CIE": 44.08, "FILO": 36.95, "SOC": 56.82, "BIO": 50.68, "FÍS": 43.44, "QUI": 36.99, "FIN": 48.6, "TEC": 39.89 } },
      3: { alunos: 1096, participacao: 96.08, geral: 52.34,
        componentes: { "MAT": 49.92, "PORT": 60.85, "ING": 48.49, "HIST": 46.14, "GEO": 53.96, "CIE": 46.63, "FILO": 36.76, "SOC": 49.79, "BIO": 55.23, "FÍS": 41.11, "QUI": 45.75, "FIN": 56.53, "TEC": 43.06 } }
    },
    // FRANCISCO MARQUES PINTO
    "27820": {
      2: { alunos: 986, participacao: 91.16, geral: 38.25,
        componentes: { "MAT": 32.17, "PORT": 44.29, "ING": 40.28, "HIST": 36.52, "GEO": 43.48, "CIE": 36.95, "FILO": 35.41, "SOC": 49.59, "BIO": 40.03, "FÍS": 34.4, "QUI": 31.64, "FIN": 36.89, "TEC": 33.29 } },
      3: { alunos: 930, participacao: 93.05, geral: 44.78,
        componentes: { "MAT": 41.55, "PORT": 53.58, "ING": 43.81, "HIST": 40.04, "GEO": 44.51, "CIE": 38.92, "FILO": 36.35, "SOC": 40.0, "BIO": 43.56, "FÍS": 40.05, "QUI": 35.45, "FIN": 51.04, "TEC": 28.78 } }
    },
    // SONIA MARIA VENTURELLI PROFESSORA
    "919688": {
      2: { alunos: 1020, participacao: 96.23, geral: 49.64,
        componentes: { "MAT": 41.72, "PORT": 57.05, "ING": 52.21, "HIST": 48.91, "GEO": 51.79, "CIE": 45.23, "FILO": 58.4, "SOC": 55.54, "BIO": 53.84, "FÍS": 45.45, "QUI": 44.92, "FIN": 52.3, "TEC": 44.59 } },
      3: { alunos: 1006, participacao: 94.29, geral: 55.07,
        componentes: { "MAT": 54.15, "PORT": 64.62, "ING": 50.72, "HIST": 47.98, "GEO": 50.17, "CIE": 44.07, "FILO": 53.59, "SOC": 46.34, "BIO": 62.14, "FÍS": 58.07, "QUI": 58.33, "FIN": 61.65, "TEC": 41.02 } }
    },
    // JOAO DEOCLECIO DA SILVA RAMOS PROFESSOR DOUTOR
    "28859": {
      2: { alunos: 401, participacao: 94.52, geral: 48.03,
        componentes: { "MAT": 46.24, "PORT": 52.19, "ING": 50.36, "HIST": 44.64, "GEO": 49.02, "CIE": 51.92, "FILO": 37.3, "SOC": 64.0, "BIO": 48.86, "FÍS": 40.3, "QUI": 42.71, "FIN": 44.93, "TEC": 27.88 } },
      3: { alunos: 415, participacao: 76.57, geral: 55.58,
        componentes: { "MAT": 55.75, "PORT": 60.93, "ING": 52.58, "HIST": 50.66, "GEO": 50.58, "CIE": 54.91, "FILO": 45.7, "SOC": 66.36, "BIO": 55.5, "FÍS": 49.15, "QUI": 47.13, "FIN": 50.3, "TEC": 31.63 } }
    },
    // ANTONIO DE BARROS SERRA PROFESSOR
    "28769": {
      2: { alunos: 1021, participacao: 93.27, geral: 41.73,
        componentes: { "MAT": 36.85, "PORT": 46.54, "ING": 42.56, "HIST": 40.28, "GEO": 44.54, "CIE": 42.9, "FILO": 36.52, "SOC": 47.75, "BIO": 44.3, "FÍS": 34.38, "QUI": 38.97, "FIN": 43.12, "TEC": 40.09 } },
      3: { alunos: 975, participacao: 86.9, geral: 42.18,
        componentes: { "MAT": 39.18, "PORT": 50.77, "ING": 39.3, "HIST": 39.07, "GEO": 42.66, "CIE": 40.59, "FILO": 33.87, "SOC": 35.62, "BIO": 34.53, "FÍS": 29.76, "QUI": 32.93, "FIN": 41.06, "TEC": 38.33 } }
    }
  }
};
