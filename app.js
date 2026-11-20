// ===== Datos exactos del pensum (44 semanas) =====
const SEED = [
  // TRIMESTRE 1 (1-12): Fundamentos IA + ML
  { id: 1, trimestre: 1, materia: "AI-900 + IBM ML", tema: "Introducción IA / Intro ML + numpy-pandas-sklearn", entregable: "Resumen 1 página", link: "https://learn.microsoft.com/en-us/training/paths/get-started-ai-apps-agents/", horas: 20 },
  { id: 2, trimestre: 1, materia: "AI-900 + IBM ML", tema: "ML fundamental / Regresión Lineal", entregable: "Notebook regresión", link: "https://cognitiveclass.ai/courses/machine-learning-with-python", horas: 20 },
  { id: 3, trimestre: 1, materia: "AI-900 + IBM ML", tema: "Visión por computadora / Regresión No Lineal + MSE-R²", entregable: "Comparativa regresiones", link: "", horas: 20 },
  { id: 4, trimestre: 1, materia: "AI-900 + IBM ML", tema: "NLP / Clasificación KNN", entregable: "Clasificador KNN iris", link: "", horas: 20 },
  { id: 5, trimestre: 1, materia: "AI-900 + IBM ML", tema: "IA Generativa / Decision Trees", entregable: "Comparativa KNN vs Tree", link: "", horas: 20 },
  { id: 6, trimestre: 1, materia: "AI-900 + IBM ML", tema: "Repaso sandboxes / Logistic Regression + SVM", entregable: "Notebook 4 clasificadores", link: "", horas: 20 },
  { id: 7, trimestre: 1, materia: "AI-900 + IBM ML", tema: "Practice Assessment / K-Means", entregable: "Clustering dataset propio", link: "", horas: 20 },
  { id: 8, trimestre: 1, materia: "AI-900 + IBM ML", tema: "Cierre AI-900 / Jerárquico + DBSCAN", entregable: "Comparativa 3 clusterings", link: "", horas: 20 },
  { id: 9, trimestre: 1, materia: "IBM ML", tema: "Sistemas de recomendación: Content-based", entregable: "Proyecto 1a iniciado", link: "", horas: 20 },
  { id: 10, trimestre: 1, materia: "IBM ML", tema: "Collaborative Filtering", entregable: "Proyecto 1a terminado", link: "", horas: 20 },
  { id: 11, trimestre: 1, materia: "IBM ML", tema: "Repaso módulos 1-5", entregable: "Proyecto 1b iniciado", link: "", horas: 20 },
  { id: 12, trimestre: 1, materia: "IBM ML", tema: "Completar curso + certificado gratuito", entregable: "Proyecto 1b terminado", link: "https://cognitiveclass.ai/courses/machine-learning-with-python", horas: 20 },

  // TRIMESTRE 2 (13-24): FastAPI + Neon + Docker
  { id: 13, trimestre: 2, materia: "FastAPI", tema: "Instalación, / y /health", entregable: "API 2 endpoints", link: "https://fastapi.tiangolo.com/es/tutorial/", horas: 20 },
  { id: 14, trimestre: 2, materia: "FastAPI", tema: "Request body, /predict", entregable: "/predict funcional", link: "", horas: 20 },
  { id: 15, trimestre: 2, materia: "FastAPI + Neon", tema: "Conexión asyncpg a Neon", entregable: "Endpoint lee Neon", link: "", horas: 20 },
  { id: 16, trimestre: 2, materia: "FastAPI + ML", tema: "Integrar modelo del T1", entregable: "API con modelo", link: "", horas: 20 },
  { id: 17, trimestre: 2, materia: "Docker", tema: "Dockerfile para API", entregable: "Dockerfile funcional", link: "https://docs.docker.com/get-started/", horas: 20 },
  { id: 18, trimestre: 2, materia: "Docker", tema: "Docker Compose", entregable: "API dockerizada", link: "", horas: 20 },
  { id: 19, trimestre: 2, materia: "Testing", tema: "Pytest endpoints", entregable: "Tests pasando", link: "", horas: 20 },
  { id: 20, trimestre: 2, materia: "Proyecto 2", tema: "Proyecto 2 iniciado", entregable: "Repo iniciado", link: "", horas: 20 },
  { id: 21, trimestre: 2, materia: "Proyecto 2", tema: "Manejo de errores + logging", entregable: "Proyecto funcional", link: "", horas: 20 },
  { id: 22, trimestre: 2, materia: "Proyecto 2", tema: "Despliegue Railway/Render", entregable: "Proyecto 2 desplegado", link: "", horas: 20 },
  { id: 23, trimestre: 2, materia: "Repaso", tema: "Repaso backend", entregable: "-", link: "", horas: 20 },
  { id: 24, trimestre: 2, materia: "Preparación T3", tema: "Instalar LangChain, docs RAG", entregable: "Entorno listo", link: "https://docs.langchain.com/oss/python/langchain/install", horas: 20 },

  // TRIMESTRE 3 (25-36): RAG + Agentes
  { id: 25, trimestre: 3, materia: "RAG", tema: "Retrieval, chunking PDF", entregable: "Notebook chunking", link: "https://docs.langchain.com/oss/python/deepagents/rag", horas: 25 },
  { id: 26, trimestre: 3, materia: "RAG", tema: "Embeddings + pgvector en Neon", entregable: "BD con embeddings", link: "", horas: 25 },
  { id: 27, trimestre: 3, materia: "RAG", tema: "Similarity search", entregable: "Notebook búsqueda", link: "", horas: 25 },
  { id: 28, trimestre: 3, materia: "RAG", tema: "RAG completo: retrieval + generación", entregable: "Script RAG", link: "", horas: 25 },
  { id: 29, trimestre: 3, materia: "RAG", tema: "Evaluación precision/recall + chunk sizes", entregable: "Tabla comparativa", link: "", horas: 25 },
  { id: 30, trimestre: 3, materia: "Proyecto 3a", tema: "RAG en FastAPI /ask", entregable: "/ask funcional", link: "", horas: 25 },
  { id: 31, trimestre: 3, materia: "HF Agents", tema: "Unit 1: Tools/Thoughts/Actions", entregable: "Notebook Unit 1", link: "https://huggingface.co/learn/agents-course/unit0/introduction", horas: 25 },
  { id: 32, trimestre: 3, materia: "HF Agents", tema: "Unit 1 quiz + certificado gratuito", entregable: "Certificado HF", link: "https://huggingface.co/learn/agents-course/unit0/introduction", horas: 25 },
  { id: 33, trimestre: 3, materia: "HF Agents", tema: "Unit 2: smolagents", entregable: "Agente simple", link: "", horas: 25 },
  { id: 34, trimestre: 3, materia: "HF Agents", tema: "Unit 2: LangGraph, tool calling", entregable: "Agente con tools", link: "", horas: 25 },
  { id: 35, trimestre: 3, materia: "Integración", tema: "Agente + RAG sobre Neon", entregable: "Agente+RAG", link: "", horas: 25 },
  { id: 36, trimestre: 3, materia: "Proyecto 3b", tema: "Proyecto 3b terminado", entregable: "Proyecto 3b GitHub", link: "", horas: 25 },

  // TRIMESTRE 4 (37-44): Producción + Capstone
  { id: 37, trimestre: 4, materia: "Producción", tema: "LangSmith tracing", entregable: "API con tracing", link: "https://academy.langchain.com/courses/quickstart-langsmith-essentials", horas: 20 },
  { id: 38, trimestre: 4, materia: "Producción", tema: "LangSmith evaluación offline/online", entregable: "Dataset + eval script", link: "https://academy.langchain.com/courses/quickstart-langsmith-essentials", horas: 20 },
  { id: 39, trimestre: 4, materia: "CI/CD", tema: "GitHub Actions + Docker", entregable: "Workflow funcionando", link: "https://www.coderhouse.com/mx/coderlibrary/desplegar-app-docker-github-actions-guia", horas: 20 },
  { id: 40, trimestre: 4, materia: "Capstone", tema: "Arquitectura del sistema", entregable: "Diagrama arquitectura", link: "", horas: 20 },
  { id: 41, trimestre: 4, materia: "Capstone", tema: "Endpoint RAG+Agente", entregable: "Endpoint funcional", link: "", horas: 20 },
  { id: 42, trimestre: 4, materia: "Capstone", tema: "10 preguntas reales, ajustes", entregable: "Resultados documentados", link: "", horas: 20 },
  { id: 43, trimestre: 4, materia: "Capstone", tema: "Docker + Actions + README", entregable: "Repo completo", link: "", horas: 20 },
  { id: 44, trimestre: 4, materia: "Capstone", tema: "Publicación final", entregable: "Capstone publicado", link: "", horas: 20 },
];

// ===== Metadatos por trimestre =====
const TRIMESTRES = {
  1: { nombre: "Fundamentos de IA y ML", meses: "Meses 1–3 · Semanas 1–12", enfoque: "AI-900, IBM ML, regresión, clasificación, clustering y recomendadores." },
  2: { nombre: "Backend, APIs y Docker", meses: "Meses 4–6 · Semanas 13–24", enfoque: "FastAPI, Neon, Docker, testing y despliegue." },
  3: { nombre: "RAG y agentes", meses: "Meses 7–9 · Semanas 25–36", enfoque: "RAG, embeddings, pgvector, Hugging Face Agents y LangGraph." },
  4: { nombre: "Producción y capstone", meses: "Meses 10–11 · Semanas 37–44", enfoque: "LangSmith, CI/CD, arquitectura y proyecto final." },
};

// ===== Inglés en paralelo (3–4 h/semana en semanas de carga técnica ligera) =====
const INGLES = [
  {
    desde: 1,
    hasta: 4,
    curso: "A2 English for Developers",
    plataforma: "freeCodeCamp",
    nivel: "A2",
    horasSemana: "3–4 h",
    porQue: "La carga técnica es más ligera al empezar fundamentos. Refuerza gramática técnica y vocabulario para describir código y tendencias; incluye 105 diálogos de nativos y examen gratuito.",
    recursos: [
      ["Curso y examen A2", "https://www.freecodecamp.org/learn/a2-english-for-developers/"],
      ["Plan de estudios", "https://www.freecodecamp.org/news/freecodecamps-a2-english-for-developers-certification-is-now-live/"],
    ],
  },
  {
    desde: 13,
    hasta: 20,
    curso: "B1 English for Developers",
    plataforma: "freeCodeCamp",
    nivel: "B1",
    horasSemana: "3 h",
    porQue: "En FastAPI + Docker necesitas documentar APIs y explicar decisiones técnicas. B1 entrena reuniones y opiniones; el examen también es gratuito.",
    recursos: [
      ["Examen de certificación B1", "https://www.freecodecamp.org/learn/b1-english-for-developers/en-b1-certification-exam/en-b1-certification-exam"],
      ["Plan de estudios", "https://www.freecodecamp.org/news/freecodecamps-b1-english-for-developers-certification-is-now-live/"],
    ],
  },
  {
    desde: 25,
    hasta: 32,
    curso: "English for IT 1",
    plataforma: "Cisco NetAcad",
    nivel: "B2",
    horasSemana: "3–4 h",
    porQue: "RAG + Agentes exige inglés técnico B2, el que piden ofertas como HP, EPAM o CGI. Son 50 h autoguiadas con badge digital (Credly); puedes continuar después de la semana 32.",
    recursos: [
      ["Curso English for IT 1", "https://www.netacad.com/courses/english-for-it1"],
    ],
  },
];

function inglesDe(id) {
  return INGLES.find((modulo) => id >= modulo.desde && id <= modulo.hasta) || null;
}

// ===== Recursos de estudio por semana =====
const RECURSOS = {
  1: [
    ["Microsoft Learn · Primeros pasos con IA y agentes", "https://learn.microsoft.com/en-us/training/paths/get-started-ai-apps-agents/"],
    ["NumPy · Guía rápida", "https://numpy.org/doc/stable/user/quickstart.html"],
    ["pandas · 10 minutos", "https://pandas.pydata.org/docs/user_guide/10min.html"],
    ["scikit-learn · Primeros pasos", "https://scikit-learn.org/stable/getting_started.html"],
  ],
  2: [
    ["IBM · Machine Learning with Python", "https://cognitiveclass.ai/courses/machine-learning-with-python"],
    ["scikit-learn · Modelos lineales", "https://scikit-learn.org/stable/modules/linear_model.html"],
    ["Microsoft Learn · Introducción al ML", "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"],
  ],
  3: [
    ["Microsoft Learn · Azure AI Vision", "https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/"],
    ["scikit-learn · Métricas de regresión", "https://scikit-learn.org/stable/modules/model_evaluation.html#regression-metrics"],
    ["scikit-learn · PolynomialFeatures", "https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PolynomialFeatures.html"],
  ],
  4: [
    ["Microsoft Learn · Azure AI Language", "https://learn.microsoft.com/en-us/azure/ai-services/language-service/"],
    ["scikit-learn · KNeighborsClassifier", "https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html"],
    ["scikit-learn · Dataset Iris", "https://scikit-learn.org/stable/auto_examples/datasets/plot_iris_dataset.html"],
  ],
  5: [
    ["Microsoft Learn · Microsoft Foundry", "https://learn.microsoft.com/en-us/azure/foundry/"],
    ["scikit-learn · Árboles de decisión", "https://scikit-learn.org/stable/modules/tree.html"],
  ],
  6: [
    ["Microsoft Learn · Certificación Azure AI Fundamentals", "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/"],
    ["Microsoft Learn · Guía de estudio AI-900", "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-900"],
    ["scikit-learn · Regresión logística", "https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression"],
    ["scikit-learn · Máquinas de vectores de soporte", "https://scikit-learn.org/stable/modules/svm.html"],
  ],
  7: [
    ["Microsoft Learn · Certificación Azure AI Fundamentals", "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/"],
    ["Microsoft Learning · Laboratorios AI-900", "https://microsoftlearning.github.io/AI-900-AIFundamentals/"],
    ["scikit-learn · K-Means", "https://scikit-learn.org/stable/modules/clustering.html#k-means"],
  ],
  8: [
    ["Microsoft Learn · Certificación Azure AI Fundamentals", "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/"],
    ["scikit-learn · Clustering jerárquico", "https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering"],
    ["scikit-learn · DBSCAN", "https://scikit-learn.org/stable/modules/clustering.html#dbscan"],
  ],
  9: [
    ["IBM · Machine Learning with Python", "https://cognitiveclass.ai/courses/machine-learning-with-python"],
    ["scikit-learn · Similitud coseno", "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.cosine_similarity.html"],
    ["TensorFlow · Recomendadores content-based", "https://www.tensorflow.org/recommenders/examples/basic_retrieval"],
  ],
  10: [
    ["IBM · Machine Learning with Python", "https://cognitiveclass.ai/courses/machine-learning-with-python"],
    ["TensorFlow · Recomendadores (retrieval)", "https://www.tensorflow.org/recommenders/examples/basic_retrieval"],
    ["Surprise · Librería de recomendadores", "https://surpriselib.com/"],
  ],
  11: [
    ["IBM · Machine Learning with Python", "https://cognitiveclass.ai/courses/machine-learning-with-python"],
    ["scikit-learn · Guía de usuario", "https://scikit-learn.org/stable/user_guide.html"],
  ],
  12: [
    ["IBM · Machine Learning with Python", "https://cognitiveclass.ai/courses/machine-learning-with-python"],
    ["scikit-learn · Guía de usuario", "https://scikit-learn.org/stable/user_guide.html"],
  ],
  13: [
    ["FastAPI · Tutorial en español", "https://fastapi.tiangolo.com/es/tutorial/"],
    ["FastAPI · Primeros pasos", "https://fastapi.tiangolo.com/es/tutorial/first-steps/"],
  ],
  14: [
    ["FastAPI · Request body", "https://fastapi.tiangolo.com/es/tutorial/body/"],
    ["Pydantic · Modelos", "https://pydantic.dev/docs/validation/latest/concepts/models/"],
  ],
  15: [
    ["asyncpg · Documentación", "https://magicstack.github.io/asyncpg/current/"],
    ["Neon · Conectar desde cualquier app", "https://neon.com/docs/connect/connect-from-any-app"],
    ["Neon · Guía de Python", "https://neon.com/docs/guides/python"],
  ],
  16: [
    ["scikit-learn · Persistencia de modelos", "https://scikit-learn.org/stable/model_persistence.html"],
    ["Joblib · Documentación", "https://joblib.readthedocs.io/en/stable/"],
    ["FastAPI · Tutorial en español", "https://fastapi.tiangolo.com/es/tutorial/"],
  ],
  17: [
    ["Docker · Get started", "https://docs.docker.com/get-started/"],
    ["FastAPI · Contenedores Docker", "https://fastapi.tiangolo.com/deployment/docker/"],
  ],
  18: [
    ["Docker · Compose", "https://docs.docker.com/compose/"],
    ["Docker · Compose getting started", "https://docs.docker.com/compose/gettingstarted/"],
  ],
  19: [
    ["pytest · Documentación", "https://docs.pytest.org/en/stable/"],
    ["FastAPI · Testing", "https://fastapi.tiangolo.com/tutorial/testing/"],
  ],
  20: [
    ["FastAPI · Aplicaciones grandes", "https://fastapi.tiangolo.com/tutorial/bigger-applications/"],
    ["FastAPI · Tutorial en español", "https://fastapi.tiangolo.com/es/tutorial/"],
  ],
  21: [
    ["FastAPI · Manejo de errores", "https://fastapi.tiangolo.com/tutorial/handling-errors/"],
    ["Python · Logging HOWTO", "https://docs.python.org/3/howto/logging.html"],
  ],
  22: [
    ["Railway · Desplegar FastAPI", "https://railway.com/guides/fastapi"],
    ["Render · Desplegar FastAPI", "https://render.com/docs/deploy-fastapi"],
  ],
  23: [
    ["FastAPI · Documentación en español", "https://fastapi.tiangolo.com/es/"],
    ["Docker · Compose", "https://docs.docker.com/compose/"],
  ],
  24: [
    ["LangChain · Instalación", "https://docs.langchain.com/oss/python/langchain/install"],
    ["LangChain · Inicio rápido", "https://docs.langchain.com/oss/python/langchain/quickstart"],
  ],
  25: [
    ["LangChain · RAG con Deep Agents", "https://docs.langchain.com/oss/python/deepagents/rag"],
    ["LangChain · Cargadores de documentos", "https://docs.langchain.com/oss/python/integrations/document_loaders"],
    ["LangChain · Text splitters", "https://docs.langchain.com/oss/python/integrations/splitters"],
  ],
  26: [
    ["pgvector · Repositorio y guía", "https://github.com/pgvector/pgvector"],
    ["Neon · Extensión pgvector", "https://neon.com/docs/extensions/pgvector"],
    ["LangChain · Embeddings", "https://docs.langchain.com/oss/python/integrations/embeddings"],
  ],
  27: [
    ["LangChain · Vector stores", "https://docs.langchain.com/oss/python/integrations/vectorstores"],
    ["LangChain · Retrievers", "https://docs.langchain.com/oss/python/integrations/retrievers"],
    ["pgvector · Operadores de distancia", "https://github.com/pgvector/pgvector#querying"],
  ],
  28: [
    ["LangChain · RAG con Deep Agents", "https://docs.langchain.com/oss/python/deepagents/rag"],
    ["LangChain · Inicio rápido", "https://docs.langchain.com/oss/python/langchain/quickstart"],
  ],
  29: [
    ["LangSmith · Conceptos de evaluación", "https://docs.langchain.com/langsmith/evaluation-concepts"],
    ["LangSmith · Evaluación de RAG", "https://docs.langchain.com/langsmith/evaluate-rag-tutorial"],
  ],
  30: [
    ["LangChain · Desplegar", "https://docs.langchain.com/oss/python/langchain/deploy"],
    ["FastAPI · Documentación en español", "https://fastapi.tiangolo.com/es/"],
  ],
  31: [
    ["Hugging Face · Agents Course", "https://huggingface.co/learn/agents-course/unit0/introduction"],
  ],
  32: [
    ["Hugging Face · Agents Course", "https://huggingface.co/learn/agents-course/unit0/introduction"],
  ],
  33: [
    ["smolagents · Documentación", "https://huggingface.co/docs/smolagents/index"],
    ["Hugging Face · Agents Course", "https://huggingface.co/learn/agents-course/unit0/introduction"],
  ],
  34: [
    ["LangGraph · Documentación", "https://docs.langchain.com/oss/python/langgraph/overview"],
    ["LangChain · Herramientas", "https://docs.langchain.com/oss/python/langchain/tools"],
  ],
  35: [
    ["LangGraph · Agentic RAG", "https://docs.langchain.com/oss/python/langgraph/agentic-rag"],
    ["pgvector · Repositorio y guía", "https://github.com/pgvector/pgvector"],
  ],
  36: [
    ["LangGraph · Documentación", "https://docs.langchain.com/oss/python/langgraph/overview"],
    ["Hugging Face · Agents Course", "https://huggingface.co/learn/agents-course/unit0/introduction"],
  ],
  37: [
    ["LangSmith · Curso rápido", "https://academy.langchain.com/courses/quickstart-langsmith-essentials"],
    ["LangSmith · Observabilidad", "https://docs.langchain.com/langsmith/observability-quickstart"],
  ],
  38: [
    ["LangSmith · Curso rápido", "https://academy.langchain.com/courses/quickstart-langsmith-essentials"],
    ["LangSmith · Conceptos de evaluación", "https://docs.langchain.com/langsmith/evaluation-concepts"],
  ],
  39: [
    ["Coderhouse · Docker + GitHub Actions", "https://www.coderhouse.com/mx/coderlibrary/desplegar-app-docker-github-actions-guia"],
    ["GitHub · Actions", "https://docs.github.com/en/actions"],
    ["GitHub · docker/build-push-action", "https://github.com/docker/build-push-action"],
  ],
  40: [
    ["Mermaid · Diagramas como código", "https://mermaid.js.org/intro/"],
    ["Microsoft · Azure Architecture Center", "https://learn.microsoft.com/en-us/azure/architecture/"],
  ],
  41: [
    ["LangChain · Desplegar", "https://docs.langchain.com/oss/python/langchain/deploy"],
    ["FastAPI · Documentación en español", "https://fastapi.tiangolo.com/es/"],
  ],
  42: [
    ["LangSmith · Conceptos de evaluación", "https://docs.langchain.com/langsmith/evaluation-concepts"],
    ["LangSmith · Evaluación de RAG", "https://docs.langchain.com/langsmith/evaluate-rag-tutorial"],
  ],
  43: [
    ["Docker · Documentación", "https://docs.docker.com/"],
    ["GitHub · Acerca de los README", "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"],
  ],
  44: [
    ["GitHub · Publicar releases", "https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository"],
    ["GitHub Pages · Publicar un sitio", "https://docs.github.com/en/pages"],
  ],
};

const STORAGE_KEY = "ai-engineer-tracker";
const TEMA_KEY = "ai-engineer-tema";
const ESTADO_INICIAL = { completada: false, notas: "", horasReales: 0, inglesCompletada: false, horasIngles: 0 };
let state = {};
let segmentosRibbon = [];

function crearEstadoBase() {
  const base = {};
  SEED.forEach((s) => { base[s.id] = { ...ESTADO_INICIAL }; });
  return base;
}

function normalizarEstado(guardado) {
  const base = crearEstadoBase();
  if (!guardado || typeof guardado !== "object") return base;

  SEED.forEach((s) => {
    const prev = guardado[s.id];
    if (!prev || typeof prev !== "object") return;
    base[s.id] = {
      completada: Boolean(prev.completada),
      notas: typeof prev.notas === "string" ? prev.notas : "",
      horasReales: Math.max(0, Number(prev.horasReales) || 0),
      inglesCompletada: Boolean(prev.inglesCompletada),
      horasIngles: Math.max(0, Number(prev.horasIngles) || 0),
    };
  });
  return base;
}

function cargarEstado() {
  let guardado = null;
  try {
    guardado = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch (error) {
    console.warn("El progreso guardado estaba corrupto; se reinició.", error);
  }
  state = normalizarEstado(guardado);
  guardarEstado();
}

function guardarEstado() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("No se pudo guardar el progreso en localStorage.", error);
  }
}

function estadoDe(id) {
  if (!state[id] || typeof state[id] !== "object") state[id] = { ...ESTADO_INICIAL };
  return state[id];
}

function calcularProgreso() {
  const total = SEED.length;
  const done = SEED.filter((s) => estadoDe(s.id).completada).length;
  const pct = Math.round((done / total) * 100);
  const horas = SEED.reduce((acc, s) => acc + estadoDe(s.id).horasReales, 0);
  return { total, done, pct, horas };
}

function calcularRacha() {
  let racha = 0;
  for (const s of SEED) {
    if (estadoDe(s.id).completada) racha++;
    else break;
  }
  return racha;
}

function calcularProgresoIngles() {
  const total = INGLES.reduce((acc, modulo) => acc + (modulo.hasta - modulo.desde + 1), 0);
  const done = SEED.filter((s) => inglesDe(s.id) && estadoDe(s.id).inglesCompletada).length;
  const horas = SEED.reduce((acc, s) => acc + estadoDe(s.id).horasIngles, 0);
  return { total, done, horas };
}

function formatearHoras(horas) {
  return Number.isInteger(horas) ? String(horas) : horas.toFixed(1);
}

function construirRibbon() {
  const ribbon = document.getElementById("progress-ribbon");
  if (!ribbon) return;
  segmentosRibbon = SEED.map((semana) => {
    const segmento = document.createElement("span");
    segmento.className = `ribbon-seg t${semana.trimestre}`;
    segmento.title = `Semana ${semana.id}: ${semana.materia}`;
    ribbon.appendChild(segmento);
    return { elemento: segmento, id: semana.id };
  });
}

function renderDashboard() {
  const { total, done, pct, horas } = calcularProgreso();
  const ingles = calcularProgresoIngles();
  document.getElementById("progress-pct").textContent = `${pct}%`;
  document.getElementById("weeks-done").textContent = `${done} / ${total}`;
  document.getElementById("hours-total").textContent = `${formatearHoras(horas)} h`;
  document.getElementById("streak").textContent = calcularRacha();
  document.getElementById("english-weeks-done").textContent = `${ingles.done} / ${ingles.total}`;
  document.getElementById("english-hours-total").textContent = `${formatearHoras(ingles.horas)} h`;

  const ribbon = document.getElementById("progress-ribbon");
  if (ribbon) ribbon.setAttribute("aria-label", `Mapa de progreso: ${pct}% completado, ${done} de ${total} semanas`);
  const primeraPendiente = SEED.find((semana) => !estadoDe(semana.id).completada)?.id;
  segmentosRibbon.forEach(({ elemento, id }) => {
    elemento.classList.toggle("done", estadoDe(id).completada);
    elemento.classList.toggle("current", id === primeraPendiente);
  });
}

function recursosDe(semana) {
  const lista = (RECURSOS[semana.id] || []).slice();
  if (lista.length === 0 && semana.link) {
    lista.push(["Recurso del pensum", semana.link]);
  }
  return lista;
}

function hostDe(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (error) {
    return "";
  }
}

function normalizarTexto(valor) {
  return String(valor || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function textoSemana(semana) {
  const est = estadoDe(semana.id);
  const partes = [
    `semana ${semana.id}`,
    `mes ${Math.ceil(semana.id / 4)}`,
    `trimestre ${semana.trimestre}`,
    semana.materia,
    semana.tema,
    semana.entregable,
    est.notas,
  ];
  recursosDe(semana).forEach(([nombre, url]) => partes.push(nombre, url));

  const ingles = inglesDe(semana.id);
  if (ingles) {
    partes.push(ingles.curso, ingles.plataforma, ingles.nivel, ingles.porQue);
    ingles.recursos.forEach(([nombre, url]) => partes.push(nombre, url));
  }

  return normalizarTexto(partes.join(" "));
}

function actualizarEstadoBusqueda(cantidad, busqueda) {
  const status = document.getElementById("search-status");
  const clear = document.getElementById("search-clear");
  if (clear) clear.hidden = !busqueda;
  if (status) {
    status.textContent = busqueda ? `${cantidad} de ${SEED.length} semanas` : `${SEED.length} semanas`;
  }
}

function renderIngles(semana) {
  const ingles = inglesDe(semana.id);
  if (!ingles) return "";
  const est = estadoDe(semana.id);
  const recursos = ingles.recursos
    .map(([nombre, url]) => `<a class="english-resource" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(nombre)}</a>`)
    .join("");

  return `
    <div class="english-block${est.inglesCompletada ? " done" : ""}">
      <div class="english-head">
        <span class="english-badge">Inglés paralelo, ${escapeHtml(ingles.nivel)}</span>
        <span class="english-load">${escapeHtml(ingles.horasSemana)}/semana</span>
      </div>
      <div class="english-title">${escapeHtml(ingles.curso)} · ${escapeHtml(ingles.plataforma)}</div>
      <p class="english-why">${escapeHtml(ingles.porQue)}</p>
      <div class="english-resources">${recursos}</div>
      <div class="english-tracking">
        <label class="toggle-wrap">
          <input type="checkbox" ${est.inglesCompletada ? "checked" : ""} data-id="${semana.id}" class="toggle-english" aria-label="Marcar inglés de la semana ${semana.id} como completado">
          Inglés completado
        </label>
        <label class="english-hours">Horas de inglés<input type="number" min="0" step="0.5" inputmode="decimal" value="${est.horasIngles || 0}" data-id="${semana.id}" class="input-horas-ingles" aria-label="Horas de inglés de la semana ${semana.id}"></label>
      </div>
    </div>`;
}

function renderSemana(semana) {
  const est = estadoDe(semana.id);
  const mes = Math.ceil(semana.id / 4);
  const ingles = inglesDe(semana.id);
  const horasDia = Math.round(semana.horas / 5);
  const temas = semana.tema
    .split(" / ")
    .map((tema) => `<li>${escapeHtml(tema)}</li>`)
    .join("");
  const recursos = recursosDe(semana)
    .map(([nombre, url]) => `
      <li>
        <a class="resource-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
          <span class="resource-name">${escapeHtml(nombre)}</span>
          <span class="resource-host">${escapeHtml(hostDe(url))}</span>
        </a>
      </li>`)
    .join("");

  const planBadge = ingles
    ? `${semana.horas} h técnicas, ≈${horasDia} h/día`
    : `${semana.horas} h planificadas, ≈${horasDia} h/día`;
  const inglesBadge = ingles
    ? `<span class="week-badge week-badge-english">Inglés ${escapeHtml(ingles.horasSemana)}</span>`
    : "";

  return `
    <article class="week-card t${semana.trimestre}${est.completada ? " done" : ""}" data-id="${semana.id}">
      <div class="week-header">
        <div class="week-info">
          <div class="week-kicker">
            <span class="week-badge">Mes ${mes}</span>
            <span class="week-badge">${planBadge}</span>
            ${inglesBadge}
          </div>
          <div class="week-title">Semana ${semana.id} · ${escapeHtml(semana.materia)}</div>
          <ul class="week-topics" aria-label="Temas de la semana ${semana.id}">${temas}</ul>
        </div>
        <label class="toggle-wrap">
          <input type="checkbox" ${est.completada ? "checked" : ""} data-id="${semana.id}" class="toggle-done" aria-label="Marcar semana ${semana.id} como completada">
          Completada
        </label>
      </div>
      <div class="week-body">
        <label>Entregable<input type="text" value="${escapeHtml(semana.entregable)}" readonly></label>
        <label>Horas reales<input type="number" min="0" step="0.5" inputmode="decimal" value="${est.horasReales || 0}" data-id="${semana.id}" class="input-horas"></label>
        <label class="notes-field">Notas<textarea data-id="${semana.id}" class="input-notas" placeholder="Notas de la semana...">${escapeHtml(est.notas)}</textarea></label>
      </div>
      <div class="week-resources">
        <div class="resources-title">Recursos para estudiar</div>
        <ul class="resource-list">${recursos}</ul>
      </div>
      ${renderIngles(semana)}
    </article>`;
}

function renderSemanas() {
  const contenedor = document.getElementById("weeks-list");
  const filtroT = document.getElementById("filter-trimester").value;
  const filtroM = document.getElementById("filter-month").value;
  const filtroS = document.getElementById("filter-status").value;
  const busqueda = document.getElementById("search-input").value.trim();
  const terminos = normalizarTexto(busqueda).split(/\s+/).filter(Boolean);

  const visibles = SEED.filter((semana) => {
    const est = estadoDe(semana.id);
    const mes = Math.ceil(semana.id / 4);
    if (filtroT !== "all" && String(semana.trimestre) !== filtroT) return false;
    if (filtroM !== "all" && String(mes) !== filtroM) return false;
    if (filtroS === "done" && !est.completada) return false;
    if (filtroS === "pending" && est.completada) return false;
    if (terminos.length > 0) {
      const texto = textoSemana(semana);
      if (!terminos.every((termino) => texto.includes(termino))) return false;
    }
    return true;
  });

  actualizarEstadoBusqueda(visibles.length, busqueda);

  if (visibles.length === 0) {
    const hayFiltros = filtroT !== "all" || filtroM !== "all" || filtroS !== "all";
    let mensaje = "No hay semanas con estos filtros.";
    if (busqueda && hayFiltros) mensaje = "No hay semanas que coincidan con tu búsqueda y filtros.";
    else if (busqueda) mensaje = "No hay semanas que coincidan con tu búsqueda.";
    contenedor.innerHTML = `<p class="empty-state">${mensaje}</p>`;
    return;
  }

  const grupos = new Map();
  visibles.forEach((semana) => {
    if (!grupos.has(semana.trimestre)) grupos.set(semana.trimestre, []);
    grupos.get(semana.trimestre).push(semana);
  });

  let html = "";
  grupos.forEach((semanas, trimestre) => {
    const meta = TRIMESTRES[trimestre];
    html += `
      <section class="trimester-group t${trimestre}">
        <header class="trimester-header">
          <div class="trimester-title">
            <span class="trimester-badge">T${trimestre}</span>
            ${escapeHtml(meta.nombre)}
          </div>
          <div class="trimester-meta">${escapeHtml(meta.meses)}</div>
          <div class="trimester-focus">${escapeHtml(meta.enfoque)}</div>
        </header>
        <div class="trimester-weeks">${semanas.map(renderSemana).join("")}</div>
      </section>`;
  });
  contenedor.innerHTML = html;

  contenedor.querySelectorAll(".toggle-done").forEach((chk) => {
    chk.addEventListener("change", (e) => {
      const id = Number(e.target.dataset.id);
      const est = estadoDe(id);
      est.completada = e.target.checked;
      guardarEstado();
      renderDashboard();

      if (filtroS === "all") {
        e.target.closest(".week-card")?.classList.toggle("done", est.completada);
      } else {
        renderSemanas();
      }
    });
  });

  contenedor.querySelectorAll(".input-horas").forEach((inp) => {
    inp.addEventListener("input", (e) => {
      const id = Number(e.target.dataset.id);
      const valor = Number(e.target.value);
      estadoDe(id).horasReales = Number.isFinite(valor) && valor > 0 ? valor : 0;
      guardarEstado();
      renderDashboard();
    });
    inp.addEventListener("change", (e) => {
      e.target.value = estadoDe(Number(e.target.dataset.id)).horasReales;
    });
  });

  contenedor.querySelectorAll(".input-notas").forEach((ta) => {
    ta.addEventListener("input", (e) => {
      estadoDe(Number(e.target.dataset.id)).notas = e.target.value;
      guardarEstado();
    });
  });

  contenedor.querySelectorAll(".toggle-english").forEach((chk) => {
    chk.addEventListener("change", (e) => {
      const id = Number(e.target.dataset.id);
      const est = estadoDe(id);
      est.inglesCompletada = e.target.checked;
      guardarEstado();
      renderDashboard();
      e.target.closest(".english-block")?.classList.toggle("done", est.inglesCompletada);
    });
  });

  contenedor.querySelectorAll(".input-horas-ingles").forEach((inp) => {
    inp.addEventListener("input", (e) => {
      const id = Number(e.target.dataset.id);
      const valor = Number(e.target.value);
      estadoDe(id).horasIngles = Number.isFinite(valor) && valor > 0 ? valor : 0;
      guardarEstado();
      renderDashboard();
    });
    inp.addEventListener("change", (e) => {
      e.target.value = estadoDe(Number(e.target.dataset.id)).horasIngles;
    });
  });
}

function escapeHtml(str) {
  return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function aplicarTema(tema, guardar) {
  const elegido = tema === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = elegido;
  document.querySelectorAll(".theme-option").forEach((boton) => {
    boton.setAttribute("aria-pressed", String(boton.dataset.theme === elegido));
  });
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", elegido === "dark" ? "#030712" : "#f4f7fb");
  if (guardar) {
    try {
      localStorage.setItem(TEMA_KEY, elegido);
    } catch (error) {
      console.warn("No se pudo guardar el tema elegido.", error);
    }
  }
}

function inicializarTema() {
  aplicarTema(document.documentElement.dataset.theme, false);
  document.querySelectorAll(".theme-option").forEach((boton) => {
    boton.addEventListener("click", () => aplicarTema(boton.dataset.theme, true));
  });
}

function mostrarEstadoCopia(mensaje) {
  const estado = document.getElementById("backup-status");
  if (estado) estado.textContent = mensaje;
}

function exportarProgreso() {
  const datos = {
    app: "ai-engineer-tracker",
    version: 1,
    exportadoEn: new Date().toISOString(),
    tema: document.documentElement.dataset.theme,
    estado: state,
  };
  const url = URL.createObjectURL(new Blob([JSON.stringify(datos, null, 2)], { type: "application/json" }));
  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = `ai-engineer-tracker-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(enlace);
  enlace.click();
  enlace.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
  mostrarEstadoCopia("Copia descargada.");
}

function importarProgreso(evento) {
  const archivo = evento.target.files && evento.target.files[0];
  if (!archivo) return;
  const lector = new FileReader();
  lector.onload = () => {
    let datos;
    try {
      datos = JSON.parse(lector.result);
    } catch (error) {
      mostrarEstadoCopia("No se pudo leer el archivo.");
      return;
    }
    const estado = datos && typeof datos === "object" ? datos.estado : null;
    const valido = estado && typeof estado === "object" && SEED.some((semana) => estado[semana.id] && typeof estado[semana.id] === "object");
    if (!valido) {
      mostrarEstadoCopia("El archivo no contiene progreso válido.");
      return;
    }
    state = normalizarEstado(estado);
    guardarEstado();
    renderDashboard();
    renderSemanas();
    if (datos.tema === "dark" || datos.tema === "light") aplicarTema(datos.tema, true);
    mostrarEstadoCopia("Progreso restaurado.");
  };
  lector.onerror = () => mostrarEstadoCopia("No se pudo leer el archivo.");
  lector.readAsText(archivo);
  evento.target.value = "";
}

function init() {
  inicializarTema();
  cargarEstado();
  construirRibbon();
  renderDashboard();
  renderSemanas();
  document.getElementById("filter-trimester").addEventListener("change", renderSemanas);
  document.getElementById("filter-month").addEventListener("change", renderSemanas);
  document.getElementById("filter-status").addEventListener("change", renderSemanas);

  const buscador = document.getElementById("search-input");
  const limpiar = document.getElementById("search-clear");
  buscador.addEventListener("input", renderSemanas);
  buscador.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && buscador.value) {
      buscador.value = "";
      renderSemanas();
    }
  });
  limpiar.addEventListener("click", () => {
    buscador.value = "";
    renderSemanas();
    buscador.focus();
  });
  document.getElementById("export-progress").addEventListener("click", exportarProgreso);
  document.getElementById("import-progress").addEventListener("click", () => document.getElementById("import-file").click());
  document.getElementById("import-file").addEventListener("change", importarProgreso);
  document.querySelectorAll("[data-jump-trimester]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const select = document.getElementById("filter-trimester");
      if (select) {
        select.value = btn.dataset.jumpTrimester;
        renderSemanas();
      }
      document.getElementById("pensum")?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

document.addEventListener("DOMContentLoaded", init);