/* ==========================================================================
   Caterpéu — Controle de Serviços
   PWA offline-first. Sem dependências externas além das Google Fonts.
   ========================================================================== */

'use strict';

/* ---------------------------------------------------------------------- *
 * Dados fixos da empresa
 * ---------------------------------------------------------------------- */
const COMPANY = {
  name: 'Caterpéu Terraplanagem',
  cnpj: '51.102.719/0001-74',
  phones: '(37) 99939-0032 · (31) 99605-5484',
  region: 'Martinho Campos-MG · Abaeté-MG · Pompeu-MG'
};

/* ---------------------------------------------------------------------- *
 * Ícones (SVG inline, fiéis ao design)
 * ---------------------------------------------------------------------- */
const ICON = {
  back: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  export: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  gear: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" stroke-width="2"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  avatar: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" stroke="currentColor" stroke-width="2"/><path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  person64: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  lock: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  plus: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  chevron: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  pin: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="2.4" fill="currentColor"/></svg>',
  pinBig: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="2.4" fill="currentColor"/></svg>',
  check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5L20 6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  checkBig: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5L20 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  edit: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14.5 5.5l4 4M4 20l1-4L16 5a2 2 0 013 3L8 19l-4 1z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  whats: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 11.5L21 3l-8 18-2.2-7.2L3 11.5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  list: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  warn: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.3 3.9L2.7 17a2 2 0 001.7 3h15.2a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  toastCheck: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5L20 6" stroke="#F5A623" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  camera: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 8a2 2 0 012-2h1.2l.9-1.5A2 2 0 0110 3.5h4a2 2 0 011.9 1L16.8 6H18a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.5" stroke="currentColor" stroke-width="1.8"/></svg>',
  trash: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m2 0-1 13a1 1 0 01-1 1H8a1 1 0 01-1-1L6 7h12z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

/* ---------------------------------------------------------------------- *
 * Utilitários
 * ---------------------------------------------------------------------- */
function uuid() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return 'dev-' + Date.now() + '-' + Math.random().toString(36).slice(2);
}
function esc(v) {
  return String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function num(v) { if (v === '' || v == null) return NaN; return parseFloat(String(v).replace(/\./g, '').replace(',', '.')); }
function fmtBRL(n) { if (n == null || isNaN(n)) n = 0; return 'R$ ' + Number(n).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function fmtHor(v) { if (v == null || isNaN(v)) return '—'; return Number(v).toLocaleString('pt-BR', { maximumFractionDigits: 1 }); }
function fmtQty(h, maquina) { const suf = maquina === 'caminhao' ? ' km' : ' h'; return Number(h || 0).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + suf; }
function tipoLabel(t, maquina) {
  if (t === 'diaria') return 'Diária';
  if (t === 'fechado') return 'Valor fechado';
  return maquina === 'caminhao' ? 'Por km' : 'Por hora';
}
function baseTotalOf(s) {
  if (s.tipo === 'hora') { const h = (s.horFinal != null && s.horInicial != null) ? Math.max(0, s.horFinal - s.horInicial) : 0; return h * s.valor; }
  if (s.tipo === 'diaria') { return (s.diarias || 0) * s.valor; }
  return s.valor;
}
function totalOf(s) {
  const base = baseTotalOf(s);
  if (s.nf && s.nfPercent) return base * (1 + s.nfPercent / 100);
  return base;
}
function nowLabel() {
  const d = new Date();
  const dias = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
  const hh = String(d.getHours()).padStart(2, '0'), mm = String(d.getMinutes()).padStart(2, '0');
  return 'Hoje · ' + hh + ':' + mm;
}
function fmtDateTime(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('pt-BR') + ' · ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}
function initials(client) {
  return (String(client || '').match(/[A-Za-zÀ-ÿ]+/g) || ['?']).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}
function digitsOnly(s) { return String(s || '').replace(/\D/g, ''); }

/* ---------------------------------------------------------------------- *
 * IndexedDB
 * ---------------------------------------------------------------------- */
const DB_NAME = 'caterpeu-db';
const DB_VERSION = 1;
let _dbPromise = null;

function openDB() {
  if (_dbPromise) return _dbPromise;
  _dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('meta')) db.createObjectStore('meta', { keyPath: 'key' });
      if (!db.objectStoreNames.contains('services')) db.createObjectStore('services', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('logs')) db.createObjectStore('logs', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('syncQueue')) db.createObjectStore('syncQueue', { keyPath: 'id' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return _dbPromise;
}
async function dbPut(store, value) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).put(value);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function dbGetAll(store) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}
async function dbGet(store, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveMeta(key, value) { await dbPut('meta', { key, value }); }

/* ---------------------------------------------------------------------- *
 * Estado da aplicação
 * ---------------------------------------------------------------------- */
const state = {
  screen: 'home',
  tab: 'andamento',
  selectedId: null, draftId: null, editingId: null,
  toast: null, _toastTimer: null,

  deviceId: null, userName: null, userNameInput: '', userSetupReturnScreen: 'home',
  config: {
    nfPercent: 8,
    nfMessage: 'Avise o cliente que o valor aumentará {percentual}% para emissão de Nota Fiscal.',
    pagMessage: 'Avise o cliente que só trabalhamos à vista.',
    payMethods: { dinheiro: true, pix: true, cartao: true, cheque: true }
  },
  adminPin: '', pinInputDraft: '',
  apiUrl: '',
  seq: 0,
  notaCounters: {},
  services: [],
  logs: [],
  syncQueue: [],

  configPassInput: '', configUnlockError: null,
  lastExportFilename: '',

  form: { client: '', contact: '', tipo: 'hora', maquina: 'retro', valor: '', horimetro: '', local: '', nf: false, pagamento: '' },
  formPhotoIni: null,
  closeForm: { horimetroFinal: '', diarias: '' },
  closePhotoFim: null,

  pendingPhotoTarget: null // 'form' | 'close'
};

function emptyForm() {
  return { client: '', contact: '', tipo: 'hora', maquina: 'retro', valor: '', horimetro: '', local: '', nf: false, pagamento: '' };
}

/* ---------------------------------------------------------------------- *
 * Persistência de mutações
 * ---------------------------------------------------------------------- */
async function persistService(svc) { await dbPut('services', svc); }
async function persistLog(entry) { await dbPut('logs', entry); }

function addLog(text) {
  const entry = {
    id: 'log-' + Date.now() + '-' + Math.random().toString(36).slice(2),
    text, time: nowLabel(),
    device_id: state.deviceId, user_name: state.userName || 'Usuário sem nome',
    created_at: new Date().toISOString()
  };
  state.logs.unshift(entry);
  persistLog(entry);
  queueSync('log', entry);
}

function showToast(msg) {
  state.toast = msg;
  clearTimeout(state._toastTimer);
  state._toastTimer = setTimeout(() => { state.toast = null; render(); }, 2600);
  render();
}

/* ---------------------------------------------------------------------- *
 * Sincronização com API (configurável, offline-first)
 * ---------------------------------------------------------------------- */
function queueSync(type, payload) {
  const item = {
    id: 'sq-' + Date.now() + '-' + Math.random().toString(36).slice(2),
    type, payload, device_id: state.deviceId, user_name: state.userName,
    created_at: new Date().toISOString(), synced: false
  };
  state.syncQueue.push(item);
  dbPut('syncQueue', item);
  trySync();
}

let _syncing = false;
async function trySync() {
  if (_syncing) return;
  if (!state.apiUrl || !navigator.onLine) { updateSyncBadge(); return; }
  _syncing = true;
  try {
    const pending = state.syncQueue.filter((i) => !i.synced);
    for (const item of pending) {
      try {
        const res = await fetch(state.apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item)
        });
        if (res.ok) { item.synced = true; await dbPut('syncQueue', item); }
        else { break; }
      } catch (e) { break; }
    }
  } finally {
    _syncing = false;
    updateSyncBadge();
  }
}
function updateSyncBadge() {
  const badge = document.getElementById('sync-badge');
  if (badge) {
    const pending = state.syncQueue.filter((i) => !i.synced).length;
    badge.textContent = state.apiUrl
      ? (pending > 0 ? `${pending} pendente(s) de sincronização` : 'Tudo sincronizado')
      : 'Nenhuma API configurada — dados só ficam locais';
  }
}
window.addEventListener('online', trySync);

/* ---------------------------------------------------------------------- *
 * Numeração de nota (ano + sequência, ex: 2026001)
 * ---------------------------------------------------------------------- */
function nextNotaNumero() {
  const year = new Date().getFullYear();
  const counters = state.notaCounters || {};
  const next = (counters[year] || 0) + 1;
  counters[year] = next;
  state.notaCounters = counters;
  saveMeta('notaCounters', counters);
  return String(year) + String(next).padStart(3, '0');
}

/* ---------------------------------------------------------------------- *
 * Autenticação de admin (PIN fixo configurável + fallback por data)
 * ---------------------------------------------------------------------- */
function adminPasswordToday() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yy = String(d.getFullYear()).slice(-2);
  return dd + mm + yy;
}

/* ---------------------------------------------------------------------- *
 * Captura de foto (câmera ou galeria) com compressão
 * ---------------------------------------------------------------------- */
function fileToCompressedDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const maxDim = 1280;
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) { height = Math.round(height * maxDim / width); width = maxDim; }
          else { width = Math.round(width * maxDim / height); height = maxDim; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function openPhotoPicker(target) {
  state.pendingPhotoTarget = target;
  document.getElementById('photo-input').click();
}

async function handlePhotoInputChange(e) {
  const file = e.target.files && e.target.files[0];
  e.target.value = '';
  if (!file) return;
  try {
    const dataUrl = await fileToCompressedDataURL(file);
    if (state.pendingPhotoTarget === 'form') state.formPhotoIni = dataUrl;
    else if (state.pendingPhotoTarget === 'close') state.closePhotoFim = dataUrl;
    render();
  } catch (err) {
    showToast('Não foi possível carregar a foto');
  }
}

/* ---------------------------------------------------------------------- *
 * WhatsApp
 * ---------------------------------------------------------------------- */
function sendWhats(s) {
  try {
    const n = digitsOnly(s.contact);
    const msg = encodeURIComponent('Olá! Segue a nota de serviço da ' + COMPANY.name + '. Total: ' + fmtBRL(totalOf(s)));
    if (n) window.open('https://wa.me/55' + n + '?text=' + msg, '_blank');
    else showToast('Cliente sem telefone cadastrado');
  } catch (e) {}
  showToast('Nota enviada pelo WhatsApp');
  addLog('Nota enviada pelo WhatsApp — ' + s.client);
}
function openWhatsAppExport() {
  const filename = state.lastExportFilename || 'dados.json';
  const msg = encodeURIComponent('Segue os dados exportados do app ' + COMPANY.name + '. Anexe o arquivo "' + filename + '" que acabou de ser baixado no aparelho.');
  window.open('https://wa.me/?text=' + msg, '_blank');
}

/* ---------------------------------------------------------------------- *
 * Exportação de dados (Web Share API com fallback de download)
 * ---------------------------------------------------------------------- */
async function exportData() {
  const data = { empresa: COMPANY.name, exportado_em: new Date().toISOString(), servicos: state.services, logs: state.logs };
  const json = JSON.stringify(data, null, 2);
  const stamp = new Date().toISOString().slice(0, 10);
  const filename = 'caterpeu-dados-' + stamp + '.json';
  const blob = new Blob([json], { type: 'application/json' });
  state.lastExportFilename = filename;

  let shared = false;
  if (navigator.share && navigator.canShare) {
    try {
      const file = new File([blob], filename, { type: 'application/json' });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: 'Dados exportados — ' + COMPANY.name });
        shared = true;
      }
    } catch (e) {
      if (e && e.name === 'AbortError') shared = true; // usuário cancelou deliberadamente
    }
  }

  if (!shared) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    state.screen = 'export-instructions';
  } else {
    showToast('Dados exportados');
  }
  addLog('Dados exportados — ' + filename);
  render();
}

/* ---------------------------------------------------------------------- *
 * PDF (impressão nativa do navegador — "Salvar como PDF")
 * ---------------------------------------------------------------------- */
function downloadPdf(sel) {
  const area = document.getElementById('print-area');
  area.innerHTML = notaCardHtml(sel, true);
  showToast('Abrindo impressão — escolha "Salvar como PDF"');
  addLog('PDF da nota gerado — ' + sel.client);
  setTimeout(() => window.print(), 200);
}
window.addEventListener('afterprint', () => {
  const area = document.getElementById('print-area');
  if (area) area.innerHTML = '';
});

/* ---------------------------------------------------------------------- *
 * ViewModel de serviço
 * ---------------------------------------------------------------------- */
function vm(s) {
  const isCaminhao = s.maquina === 'caminhao';
  return {
    id: s.id, client: s.client, contact: s.contact || '', local: s.local || 'Local não informado',
    tipoLabel: tipoLabel(s.tipo, s.maquina),
    horIni: fmtHor(s.horInicial), horFim: fmtHor(s.horFinal), diarias: s.diarias,
    startedAt: s.startedAt, closedAt: s.closedAt,
    totalFmt: fmtBRL(totalOf(s)),
    metricLabel: s.tipo === 'hora' ? (isCaminhao ? 'Valor/km' : 'Valor/hora') : (s.tipo === 'diaria' ? 'Valor/diária' : 'Valor combinado'),
    metricFmt: fmtBRL(s.valor),
    initials: initials(s.client),
    isHora: s.tipo === 'hora', isDiaria: s.tipo === 'diaria', isFechado: s.tipo === 'fechado',
    isCaminhao,
    horInicialLabel: isCaminhao ? 'Km inicial' : 'Horímetro inicial',
    horFinalLabel: isCaminhao ? 'Km final' : 'Horímetro final',
    fotoIniLabel: isCaminhao ? 'Foto do odômetro inicial' : 'Foto do horímetro inicial',
    fotoFimLabel: isCaminhao ? 'Foto do odômetro final' : 'Foto do horímetro final',
    fotoLabelShort: isCaminhao ? 'Foto do odômetro' : 'Foto do horímetro',
    totalUnitLabel: isCaminhao ? 'Total de km' : 'Total de horas',
    nf: !!s.nf, nfPercent: s.nfPercent || 0, nfPercentFmt: (s.nfPercent || 0) + '%',
    nfExtraFmt: fmtBRL(baseTotalOf(s) * ((s.nfPercent || 0) / 100)),
    fotoInicial: s.fotoInicial || null, fotoFinal: s.fotoFinal || null,
    notaNumero: s.notaNumero || String(s.id).padStart(4, '0'),
    raw: s
  };
}

/* ---------------------------------------------------------------------- *
 * Ações de negócio
 * ---------------------------------------------------------------------- */
function saveUserName() {
  const name = (state.userNameInput || '').trim();
  if (!name) { showToast('Digite seu nome'); return; }
  state.userName = name;
  saveMeta('userName', name);
  const ret = state.userSetupReturnScreen || 'home';
  state.screen = ret; state.userSetupReturnScreen = 'home';
  render();
  showToast('Usuário identificado como "' + name + '"');
}

function openConfigLock() { state.screen = 'config-lock'; state.configPassInput = ''; state.configUnlockError = null; render(); }
function submitConfigPassword() {
  const input = state.configPassInput;
  const okPin = state.adminPin && input === state.adminPin;
  const okDate = input === adminPasswordToday();
  if (okPin || okDate) {
    state.screen = 'config'; state.configPassInput = ''; state.configUnlockError = null;
    state.pinInputDraft = state.adminPin || '';
    addLog('Acesso às configurações');
    render();
  } else {
    state.configUnlockError = 'Senha incorreta';
    render();
  }
}

function saveConfig() {
  const p = num(String(state.config.nfPercent));
  state.config.nfPercent = isNaN(p) ? 0 : p;
  if (state.pinInputDraft && state.pinInputDraft.trim()) {
    state.adminPin = state.pinInputDraft.trim();
    saveMeta('adminPin', state.adminPin);
  }
  if (typeof state._apiUrlDraft === 'string') {
    state.apiUrl = state._apiUrlDraft.trim();
    saveMeta('apiUrl', state.apiUrl);
  }
  saveMeta('config', state.config);
  state.screen = 'home';
  showToast('Configurações salvas');
  addLog('Configurações atualizadas');
  trySync();
}

function openNovo() {
  state.seq += 1;
  saveMeta('seq', state.seq);
  state.draftId = state.seq; state.editingId = null;
  state.form = emptyForm();
  state.formPhotoIni = null;
  state.screen = 'novo';
  render();
}
function openEditar(id) {
  const svc = state.services.find((x) => x.id === id); if (!svc) return;
  state.editingId = id; state.screen = 'editar';
  state.form = {
    client: svc.client, contact: svc.contact || '', tipo: svc.tipo, maquina: svc.maquina || 'retro',
    valor: svc.valor != null ? String(svc.valor).replace('.', ',') : '',
    horimetro: svc.horInicial != null ? String(svc.horInicial).replace('.', ',') : '',
    local: svc.local || '', nf: !!svc.nf, pagamento: svc.pagamento || ''
  };
  state.formPhotoIni = svc.fotoInicial || null;
  render();
}
function startService() {
  const f = state.form; const valor = num(f.valor);
  if (!f.client.trim() || isNaN(valor)) { showToast('Preencha cliente e valor'); return; }
  const svc = {
    id: state.draftId, client: f.client.trim(), contact: f.contact.trim(), tipo: f.tipo, maquina: f.maquina || 'retro',
    valor, horInicial: (f.tipo === 'fechado') ? null : num(f.horimetro), horFinal: null, diarias: null,
    local: f.local.trim(), startedAt: nowLabel(), startedAtISO: new Date().toISOString(), closedAt: null, status: 'andamento',
    nf: !!f.nf, nfPercent: f.nf ? state.config.nfPercent : null, pagamento: f.pagamento || '',
    fotoInicial: state.formPhotoIni || null, fotoFinal: null, notaNumero: null
  };
  state.services.unshift(svc);
  persistService(svc);
  queueSync('service_created', svc);
  state.screen = 'home'; state.tab = 'andamento';
  render();
  showToast('Serviço iniciado');
  addLog('Serviço iniciado — ' + svc.client);
}
function saveEdit() {
  const f = state.form; const valor = num(f.valor); const id = state.editingId;
  if (!f.client.trim() || isNaN(valor)) { showToast('Preencha cliente e valor'); return; }
  const idx = state.services.findIndex((x) => x.id === id); if (idx === -1) return;
  const x = state.services[idx];
  const updated = {
    ...x, client: f.client.trim(), contact: f.contact.trim(), tipo: f.tipo, maquina: f.maquina || 'retro', valor,
    horInicial: (f.tipo === 'fechado') ? null : num(f.horimetro), local: f.local.trim(),
    nf: !!f.nf, nfPercent: f.nf ? (x.nfPercent || state.config.nfPercent) : null, pagamento: f.pagamento,
    fotoInicial: state.formPhotoIni || x.fotoInicial || null
  };
  state.services[idx] = updated;
  persistService(updated);
  queueSync('service_updated', updated);
  state.selectedId = id; state.screen = 'detalhe';
  render();
  showToast('Serviço atualizado');
  addLog('Serviço editado — ' + f.client.trim());
}
function openDetalhe(id) { state.selectedId = id; state.screen = 'detalhe'; render(); }
function openFechar(id) {
  state.selectedId = id; state.screen = 'fechar';
  state.closeForm = { horimetroFinal: '', diarias: '' };
  state.closePhotoFim = null;
  render();
}
function closeService() {
  const svc = state.services.find((x) => x.id === state.selectedId); if (!svc) return;
  let patch = { status: 'fechado', closedAt: nowLabel(), closedAtISO: new Date().toISOString() };
  if (svc.tipo === 'hora') {
    const hf = num(state.closeForm.horimetroFinal);
    if (isNaN(hf)) { showToast('Informe o horímetro final'); return; }
    patch.horFinal = hf;
  } else if (svc.tipo === 'diaria') {
    const d = num(state.closeForm.diarias);
    if (isNaN(d)) { showToast('Informe as diárias'); return; }
    patch.diarias = d;
  }
  patch.fotoFinal = state.closePhotoFim || svc.fotoFinal || null;
  patch.notaNumero = svc.notaNumero || nextNotaNumero();
  const idx = state.services.findIndex((x) => x.id === svc.id);
  const updated = { ...svc, ...patch };
  state.services[idx] = updated;
  persistService(updated);
  queueSync('service_closed', updated);
  state.screen = 'nota';
  render();
  showToast('Serviço fechado');
  addLog('Serviço fechado — ' + svc.client + ' — ' + fmtBRL(totalOf(updated)));
}
function openNota(id) { state.selectedId = id; state.screen = 'nota'; render(); }

function goBack() {
  const s = state.screen;
  if (s === 'fechar') state.screen = 'detalhe';
  else if (s === 'editar') state.screen = 'detalhe';
  else if (s === 'config-lock') state.screen = 'home';
  else if (s === 'config') state.screen = 'home';
  else if (s === 'logs') state.screen = 'config';
  else if (s === 'export-instructions') state.screen = 'home';
  else if (s === 'nota') { state.screen = 'home'; state.tab = 'finalizados'; }
  else state.screen = 'home';
  render();
}

/* ---------------------------------------------------------------------- *
 * Templates de tela
 * ---------------------------------------------------------------------- */
const TITLES = {
  novo: 'Novo serviço', editar: 'Editar serviço', detalhe: 'Serviço em andamento', fechar: 'Fechar serviço',
  nota: 'Nota de serviço', config: 'Configurações', 'config-lock': 'Acesso restrito',
  logs: 'Logs de operações', 'export-instructions': 'Exportar dados'
};

function headerHtml() {
  if (state.screen === 'user-setup') return '';
  if (state.screen === 'home') {
    return `<div class="header">
      <img class="logo" src="assets/logo.png" alt="Caterpéu">
      <div class="spacer"></div>
      <button class="icon-btn" data-action="export-data" title="Exportar dados">${ICON.export}</button>
      <button class="icon-btn" data-action="open-config" title="Configurações">${ICON.gear}</button>
      <div class="avatar">${ICON.avatar}</div>
    </div>`;
  }
  const title = TITLES[state.screen] || '';
  return `<div class="header">
    <button class="back-btn" data-action="back">${ICON.back}</button>
    <span class="title">${esc(title)}</span>
  </div>`;
}

function userSetupScreen() {
  const showCancel = !!state.userName;
  return `<div class="screen centered">
    <div style="width:64px;height:64px;border-radius:18px;background:var(--chipBg);color:var(--chipInk);display:flex;align-items:center;justify-content:center;margin-bottom:18px;">${ICON.person64}</div>
    <div style="font-weight:800;font-size:19px;">Qual é o seu nome?</div>
    <div style="font-size:13.5px;color:var(--inkSoft);margin-top:8px;margin-bottom:22px;line-height:1.5;">Usamos seu nome para identificar quem fez cada operação nos logs do sistema.</div>
    <input id="user-name-input" value="${esc(state.userNameInput)}" data-field="userNameInput" placeholder="Ex: João Silva" style="width:100%;height:54px;background:var(--fieldBg);color:var(--ink);border:1px solid var(--line);border-radius:12px;padding:0 16px;font-size:16px;font-weight:500;text-align:center;">
    <button class="btn btn-primary" style="margin-top:18px;" data-action="save-user-name">Começar a usar</button>
    ${showCancel ? `<button class="btn btn-outline" style="margin-top:10px;" data-action="cancel-user-setup">Cancelar</button>` : ''}
  </div>`;
}

function svcCardAndamento(s) {
  const v = vm(s);
  return `<div class="svc-card" data-action="open-detalhe" data-id="${s.id}">
    <div class="svc-top">
      <div class="svc-avatar">${esc(v.initials)}</div>
      <div class="svc-info">
        <div class="svc-name">${esc(v.client)}</div>
        <div class="svc-loc">${ICON.pin}<span>${esc(v.local)}</span></div>
      </div>
      <div class="badge-active"><span class="dot"></span>Ativo</div>
    </div>
    <div class="svc-bottom">
      <div>
        <div class="svc-label">${esc(v.tipoLabel)} · ${esc(v.metricLabel)}</div>
        <div class="svc-metric mono">${esc(v.metricFmt)}</div>
      </div>
      <div class="svc-time">${esc(v.startedAt)}</div>
    </div>
    <button class="svc-close-btn" data-action="open-fechar" data-id="${s.id}">Fechar serviço</button>
  </div>`;
}
function svcCardFinalizado(s) {
  const v = vm(s);
  return `<div class="svc-card" data-action="open-nota" data-id="${s.id}">
    <div class="svc-top">
      <div class="svc-avatar">${esc(v.initials)}</div>
      <div class="svc-info">
        <div class="svc-name">${esc(v.client)}</div>
        <div style="font-size:13px;color:var(--inkSoft);margin-top:3px;">${esc(v.tipoLabel)} · ${esc(v.closedAt || '')}</div>
      </div>
      <div class="badge-paid">${ICON.checkBig}Pago</div>
    </div>
    <div class="svc-bottom">
      <div>
        <div class="svc-label">Total</div>
        <div class="svc-total mono">${esc(v.totalFmt)}</div>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn-sm btn-outline-solid" data-action="open-nota" data-id="${s.id}">Ver nota</button>
        <button class="btn-sm btn-whats" data-action="send-whats" data-id="${s.id}">WhatsApp</button>
      </div>
    </div>
  </div>`;
}

function homeScreen() {
  const andamento = state.services.filter((s) => s.status === 'andamento');
  const finalizados = state.services.filter((s) => s.status === 'fechado');
  const list = state.tab === 'andamento'
    ? (andamento.length
        ? andamento.map(svcCardAndamento).join('')
        : `<div class="empty-state"><div class="t">Nenhum serviço aberto</div><div class="s">Toque em "Iniciar serviço" para começar.</div></div>`)
    : (finalizados.length
        ? finalizados.map(svcCardFinalizado).join('')
        : `<div class="empty-state"><div class="t">Nenhum serviço finalizado</div><div class="s">Serviços fechados aparecem aqui com a nota.</div></div>`);

  return `<div class="screen">
    <button class="big-cta" data-action="novo">
      <span class="ico">${ICON.plus}</span>
      <span class="txt">
        <span class="t1">Iniciar serviço</span>
        <span class="t2">Cliente, horímetro e foto inicial</span>
      </span>
      ${ICON.chevron}
    </button>
    <div class="tabs">
      <button class="tab-btn ${state.tab === 'andamento' ? 'active' : ''}" data-action="tab-andamento">Em andamento · ${andamento.length}</button>
      <button class="tab-btn ${state.tab === 'finalizados' ? 'active' : ''}" data-action="tab-finalizados">Finalizados · ${finalizados.length}</button>
    </div>
    ${list}
  </div>`;
}

function photoSlotHtml(id, dataUrl, label, targetAction) {
  return `<div class="photo-slot ${dataUrl ? 'filled' : ''}" data-action="${targetAction}">
    ${dataUrl ? `<img src="${dataUrl}" alt="">` : ''}
    <span class="lbl">${ICON.camera}<br>${esc(label)}</span>
    ${dataUrl ? `<button class="remove-btn" data-action="${targetAction}-remove" title="Remover">${ICON.trash}</button>` : ''}
  </div>`;
}

function formScreen() {
  const f = state.form;
  const isEdit = state.screen === 'editar';
  const cfg = state.config;
  const valid = f.client.trim() && !isNaN(num(f.valor));
  const valorLabel = f.tipo === 'hora' ? (f.maquina === 'caminhao' ? 'Valor do km (R$)' : 'Valor da hora (R$)') : (f.tipo === 'diaria' ? 'Valor da diária (R$)' : 'Valor combinado (R$)');
  const tipoSectionLabel = f.maquina === 'caminhao' ? 'Tipo de frete' : 'Tipo de serviço';
  const tipoHoraLabel = f.maquina === 'caminhao' ? 'Por km' : 'Por hora';
  const formHorimetroLabel = f.maquina === 'caminhao' ? 'Km inicial' : 'Horímetro inicial';
  const formFotoLabel = f.maquina === 'caminhao' ? 'Foto do odômetro' : 'Foto do horímetro';
  const nfMessage = (cfg.nfMessage || '').split('{percentual}').join(String(cfg.nfPercent));

  return `<div class="screen" style="padding-top:16px;padding-bottom:8px;">
    <div class="field">
      <label>Nome do cliente</label>
      <input data-field="form.client" value="${esc(f.client)}" placeholder="Ex: Fazenda Santa Rita">
    </div>
    <div class="field">
      <label>Telefone / WhatsApp</label>
      <input data-field="form.contact" value="${esc(f.contact)}" inputmode="tel" placeholder="(34) 99999-0000">
    </div>
    <button class="checkbox-row ${f.nf ? 'checked' : ''}" data-action="toggle-nf">
      <span class="box">${f.nf ? ICON.check : ''}</span>
      <span class="lbl">Precisa de Nota Fiscal?</span>
    </button>
    ${f.nf ? `<div class="warning-box">${ICON.warn}<span>${esc(nfMessage)}</span></div>` : ''}
    <div class="field">
      <label>Forma de pagamento</label>
      <div class="pay-row">
        ${cfg.payMethods.dinheiro ? `<button class="chip-btn ${f.pagamento === 'dinheiro' ? 'active' : ''}" data-action="set-pagamento" data-value="dinheiro">Dinheiro</button>` : ''}
        ${cfg.payMethods.pix ? `<button class="chip-btn ${f.pagamento === 'pix' ? 'active' : ''}" data-action="set-pagamento" data-value="pix">Pix</button>` : ''}
        ${cfg.payMethods.cartao ? `<button class="chip-btn ${f.pagamento === 'cartao' ? 'active' : ''}" data-action="set-pagamento" data-value="cartao">Cartão</button>` : ''}
        ${cfg.payMethods.cheque ? `<button class="chip-btn ${f.pagamento === 'cheque' ? 'active' : ''}" data-action="set-pagamento" data-value="cheque">Cheque</button>` : ''}
      </div>
    </div>
    ${f.pagamento ? `<div class="warning-box">${ICON.warn}<span>${esc(cfg.pagMessage)}</span></div>` : ''}
    <div class="field">
      <label>Máquina</label>
      <div class="pay-row">
        <button class="chip-btn ${f.maquina !== 'caminhao' ? 'active' : ''}" data-action="set-maquina" data-value="retro">Retroescavadeira</button>
        <button class="chip-btn ${f.maquina === 'caminhao' ? 'active' : ''}" data-action="set-maquina" data-value="caminhao">Caminhão</button>
      </div>
    </div>
    <div class="field">
      <label>${esc(tipoSectionLabel)}</label>
      <div class="pay-row">
        <button class="chip-btn ${f.tipo === 'hora' ? 'active' : ''}" data-action="set-tipo" data-value="hora">${esc(tipoHoraLabel)}</button>
        <button class="chip-btn ${f.tipo === 'fechado' ? 'active' : ''}" data-action="set-tipo" data-value="fechado">Valor fechado</button>
        <button class="chip-btn ${f.tipo === 'diaria' ? 'active' : ''}" data-action="set-tipo" data-value="diaria">Diária</button>
      </div>
    </div>
    <div class="field">
      <label>${esc(valorLabel)}</label>
      <input class="mono" data-field="form.valor" value="${esc(f.valor)}" inputmode="decimal" placeholder="Ex: 180,00">
    </div>
    ${f.tipo !== 'fechado' ? `
    <div class="field">
      <label>${esc(formHorimetroLabel)}</label>
      <input class="mono" data-field="form.horimetro" value="${esc(f.horimetro)}" inputmode="decimal" placeholder="Ex: 1240,5">
    </div>
    <div class="field">
      <label>${esc(formFotoLabel)}</label>
      ${photoSlotHtml('form-photo', state.formPhotoIni, 'Toque para a foto', 'photo-form')}
    </div>` : ''}
    <div class="field">
      <label>Local do serviço</label>
      <input data-field="form.local" value="${esc(f.local)}" placeholder="Ex: Estrada do Café, km 7 — Patrocínio/MG">
    </div>
    <button class="btn ${valid ? 'btn-primary' : 'btn-disabled'}" data-action="form-submit">${isEdit ? 'Salvar alterações' : 'Iniciar serviço'}</button>
  </div>`;
}

function detalheScreen() {
  const s = state.services.find((x) => x.id === state.selectedId); if (!s) return '';
  const v = vm(s);
  return `<div class="screen">
    <div class="card">
      <div class="svc-top">
        <div class="svc-avatar" style="width:48px;height:48px;border-radius:13px;font-size:16px;">${esc(v.initials)}</div>
        <div class="svc-info">
          <div style="font-weight:800;font-size:18px;line-height:1.15;">${esc(v.client)}</div>
          <div style="font-size:13px;color:var(--inkSoft);margin-top:2px;">${esc(v.contact || 'Contato não informado')}</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;margin-top:14px;color:var(--inkSoft);font-size:14px;">${ICON.pinBig}<span>${esc(v.local)}</span></div>
      <div class="grid2">
        <div class="cell"><div class="k">Tipo</div><div class="v">${esc(v.tipoLabel)}</div></div>
        <div class="cell"><div class="k">${esc(v.metricLabel)}</div><div class="v mono">${esc(v.metricFmt)}</div></div>
        <div class="cell"><div class="k">${esc(v.horInicialLabel)}</div><div class="v mono">${esc(v.horIni)}</div></div>
        <div class="cell"><div class="k">Iniciado</div><div class="v">${esc(v.startedAt)}</div></div>
      </div>
      ${v.isHora ? `<div style="margin-top:16px;"><div style="font-size:12px;color:var(--inkSoft);font-weight:700;margin-bottom:7px;">${esc(v.fotoIniLabel)}</div>
        ${v.fotoInicial ? `<div class="photo-small"><img src="${v.fotoInicial}"></div>` : `<div class="photo-small" style="display:flex;align-items:center;justify-content:center;color:var(--inkSoft);font-size:12px;">Sem foto</div>`}
        </div>` : ''}
    </div>
    <div class="btn-row">
      <button class="btn btn-outline-solid" style="display:flex;align-items:center;justify-content:center;gap:8px;" data-action="editar" data-id="${s.id}">${ICON.edit}Editar</button>
      <button class="btn btn-primary wide" data-action="open-fechar" data-id="${s.id}">Fechar serviço</button>
    </div>
  </div>`;
}

function fecharScreen() {
  const s = state.services.find((x) => x.id === state.selectedId); if (!s) return '';
  const v = vm(s);
  const cf = state.closeForm;
  let closeHoras = '—', closeTotal = fmtBRL(0), closeNfExtra = fmtBRL(0), closeHasNf = false, base = 0;
  if (s.tipo === 'hora') {
    const hf = num(cf.horimetroFinal); const h = !isNaN(hf) ? Math.max(0, hf - s.horInicial) : 0;
    closeHoras = fmtQty(h, s.maquina); base = h * s.valor;
  } else if (s.tipo === 'diaria') {
    const d = num(cf.diarias) || 0; closeHoras = d + ' diária(s)'; base = d * s.valor;
  } else { closeHoras = 'Valor fechado'; base = s.valor; }
  if (s.nf && s.nfPercent) { closeHasNf = true; const extra = base * (s.nfPercent / 100); closeNfExtra = fmtBRL(extra); closeTotal = fmtBRL(base + extra); }
  else closeTotal = fmtBRL(base);

  return `<div class="screen">
    <div class="card" style="margin-bottom:16px;">
      <div style="font-weight:700;font-size:15px;">${esc(v.client)}</div>
      <div style="font-size:13px;color:var(--inkSoft);margin-top:2px;">${esc(v.tipoLabel)} · ${esc(v.metricLabel)} ${esc(v.metricFmt)}</div>
    </div>
    ${v.isHora ? `
    <div class="field">
      <label>${esc(v.horFinalLabel)} <span style="color:var(--inkSoft);font-weight:500;">(inicial: ${esc(v.horIni)})</span></label>
      <input class="mono" data-field="closeForm.horimetroFinal" value="${esc(cf.horimetroFinal)}" inputmode="decimal" placeholder="Ex: 1272,5">
    </div>
    <div class="field">
      <label>${esc(v.fotoFimLabel)}</label>
      ${photoSlotHtml('close-photo', state.closePhotoFim, v.fotoLabelShort, 'photo-close')}
    </div>` : ''}
    ${v.isDiaria ? `
    <div class="field">
      <label>Quantidade de diárias</label>
      <input class="mono" data-field="closeForm.diarias" value="${esc(cf.diarias)}" inputmode="decimal" placeholder="Ex: 3">
    </div>` : ''}
    ${v.isFechado ? `<div class="card" style="background:var(--surfaceAlt);margin-bottom:16px;">Serviço por valor fechado. Confirme abaixo para gerar a nota.</div>` : ''}
    <div class="summary-box">
      <div class="summary-row"><span>Total apurado</span><span class="v mono">${esc(closeHoras)}</span></div>
      <div class="summary-row"><span>${esc(v.metricLabel)}</span><span class="v mono">${esc(v.metricFmt)}</span></div>
      ${closeHasNf ? `<div class="summary-row"><span>Acréscimo NF (${esc(v.nfPercentFmt)})</span><span class="v mono">+${esc(closeNfExtra)}</span></div>` : ''}
      <div class="summary-div"></div>
      <div class="summary-total"><span class="k">Valor total</span><span class="v mono">${esc(closeTotal)}</span></div>
    </div>
    <button class="btn btn-primary" style="margin-top:18px;" data-action="close-service">Fechar e gerar nota</button>
  </div>`;
}

function notaCardHtml(v, forPrint) {
  const hoje = new Date().toLocaleDateString('pt-BR');
  return `<div id="${forPrint ? '' : 'nota-card'}" class="nota-card">
    <div class="nota-top">
      <img src="assets/logo.png" alt="Caterpéu">
      <div>
        <div class="nota-num-k">Nota Nº</div>
        <div class="nota-num-v mono">${esc(v.notaNumero)}</div>
      </div>
    </div>
    <div class="nota-empresa">${esc(COMPANY.name)} · CNPJ ${esc(COMPANY.cnpj)}<br>${esc(COMPANY.region)} · ${esc(COMPANY.phones)}</div>
    <div class="nota-div"></div>
    <div class="nota-cliente-row">
      <div><div class="nota-k">Cliente</div><div class="nota-v">${esc(v.client)}</div></div>
      <div style="text-align:right;"><div class="nota-k">Data</div><div class="nota-v">${esc(hoje)}</div></div>
    </div>
    <div class="nota-local"><span class="nota-k">Local</span><div style="margin-top:3px;">${esc(v.local)}</div></div>
    <div class="nota-table">
      <div class="nota-tr"><span class="l">Tipo de serviço</span><span class="r">${esc(v.tipoLabel)}</span></div>
      ${v.isHora ? `
      <div class="nota-tr"><span class="l">${esc(v.horInicialLabel)}</span><span class="r mono">${esc(v.horIni)}</span></div>
      <div class="nota-tr"><span class="l">${esc(v.horFinalLabel)}</span><span class="r mono">${esc(v.horFim)}</span></div>
      <div class="nota-tr"><span class="l">${esc(v.totalUnitLabel)}</span><span class="r mono">${esc(fmtQty(Math.max(0, (v.raw.horFinal||0) - (v.raw.horInicial||0)), v.raw.maquina))}</span></div>` : ''}
      <div class="nota-tr"><span class="l">${esc(v.metricLabel)}</span><span class="r mono">${esc(v.metricFmt)}</span></div>
      ${v.nf ? `<div class="nota-tr"><span class="l">Acréscimo NF (${esc(v.nfPercentFmt)})</span><span class="r mono">+${esc(v.nfExtraFmt)}</span></div>` : ''}
    </div>
    ${v.isHora ? `
    <div class="nota-fotos">
      <div class="col"><div class="lbl">${esc(v.fotoIniLabel)}</div><div class="photo-small">${v.fotoInicial ? `<img src="${v.fotoInicial}">` : ''}</div></div>
      <div class="col"><div class="lbl">${esc(v.fotoFimLabel)}</div><div class="photo-small">${v.fotoFinal ? `<img src="${v.fotoFinal}">` : ''}</div></div>
    </div>` : ''}
    <div class="nota-total"><span class="k">TOTAL A PAGAR</span><span class="v">${esc(v.totalFmt)}</span></div>
    <div class="nota-sig">Assinatura do cliente</div>
  </div>`;
}

function notaScreen() {
  const s = state.services.find((x) => x.id === state.selectedId); if (!s) return '';
  const v = vm(s);
  return `<div class="screen">
    ${notaCardHtml(v, false)}
    <div class="btn-row">
      <button class="btn btn-outline-solid" data-action="pdf" data-id="${s.id}">Baixar PDF</button>
      <button class="btn btn-whats wide" data-action="send-whats" data-id="${s.id}">${ICON.whats}Enviar no WhatsApp</button>
    </div>
  </div>`;
}

function configLockScreen() {
  return `<div class="screen centered-tight">
    <div style="width:64px;height:64px;border-radius:18px;background:var(--chipBg);color:var(--chipInk);display:flex;align-items:center;justify-content:center;margin-bottom:18px;">${ICON.lock}</div>
    <div style="font-weight:800;font-size:18px;">Acesso restrito</div>
    <div style="font-size:13.5px;color:var(--inkSoft);margin-top:6px;margin-bottom:22px;line-height:1.5;">Digite a senha de administrador para abrir as configurações.</div>
    <input id="config-pass-input" data-field="configPassInput" value="${esc(state.configPassInput)}" type="password" inputmode="numeric" placeholder="Senha" style="width:100%;height:54px;background:var(--fieldBg);color:var(--ink);border:1px solid var(--line);border-radius:12px;padding:0 16px;font-size:18px;font-weight:600;text-align:center;letter-spacing:.1em;">
    ${state.configUnlockError ? `<div style="color:var(--error);font-size:13px;font-weight:700;margin-top:10px;">${esc(state.configUnlockError)}</div>` : ''}
    <button class="btn btn-primary" style="margin-top:22px;" data-action="config-pass-submit">Entrar</button>
    <button class="btn btn-outline" style="margin-top:10px;" data-action="back">Voltar</button>
  </div>`;
}

function configScreen() {
  const cfg = state.config;
  if (typeof state._apiUrlDraft !== 'string') state._apiUrlDraft = state.apiUrl || '';
  if (typeof state.pinInputDraft !== 'string') state.pinInputDraft = state.adminPin || '';
  return `<div class="screen">
    <div class="user-row">
      <div><div class="k">Usuário atual</div><div class="v">${esc(state.userName || 'Sem nome')}</div></div>
      <button class="btn-sm btn-outline-solid" data-action="rename-user">Editar nome</button>
    </div>

    <label class="section-label">Acréscimo para Nota Fiscal (%)</label>
    <input class="mono" data-field="config.nfPercent" value="${esc(cfg.nfPercent)}" inputmode="decimal" placeholder="Ex: 8" style="width:100%;height:54px;background:var(--fieldBg);color:var(--ink);border:1px solid var(--line);border-radius:12px;padding:0 16px;font-size:16px;font-weight:500;margin-bottom:20px;">

    <label class="section-label">Mensagem sobre a Nota Fiscal</label>
    <div class="hint">Use {percentual} onde o número deve aparecer.</div>
    <textarea data-field="config.nfMessage" rows="2" style="width:100%;background:var(--fieldBg);color:var(--ink);border:1px solid var(--line);border-radius:12px;padding:14px 16px;font-size:15px;font-weight:500;margin-bottom:20px;">${esc(cfg.nfMessage)}</textarea>

    <label class="section-label">Mensagem sobre forma de pagamento</label>
    <div class="hint">Aparece assim que o operador escolher a forma de pagamento.</div>
    <textarea data-field="config.pagMessage" rows="2" style="width:100%;background:var(--fieldBg);color:var(--ink);border:1px solid var(--line);border-radius:12px;padding:14px 16px;font-size:15px;font-weight:500;margin-bottom:20px;">${esc(cfg.pagMessage)}</textarea>

    <label class="section-label">Formas de pagamento visíveis no app</label>
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">
      ${['dinheiro', 'pix', 'cartao', 'cheque'].map((k) => `
        <button class="checkbox-row settings ${cfg.payMethods[k] ? 'checked' : ''}" data-action="toggle-pay" data-key="${k}">
          <span class="box">${cfg.payMethods[k] ? ICON.check : ''}</span>
          <span class="lbl">${k[0].toUpperCase() + k.slice(1)}</span>
        </button>`).join('')}
    </div>

    <label class="section-label">PIN de acesso às configurações (opcional)</label>
    <div class="hint">Defina um PIN fixo para não depender da senha do dia (${esc(adminPasswordToday())}). A senha por data continua funcionando sempre, como recuperação.</div>
    <input class="mono" data-field="_apiPinDraft" value="${esc(state.pinInputDraft)}" inputmode="numeric" placeholder="Ex: 4821" style="width:100%;height:54px;background:var(--fieldBg);color:var(--ink);border:1px solid var(--line);border-radius:12px;padding:0 16px;font-size:16px;font-weight:500;margin-bottom:20px;">

    <label class="section-label">URL da API para sincronização (OutSystems)</label>
    <div class="hint">Quando configurado, o app envia serviços e logs automaticamente sempre que houver internet. Deixe em branco para usar só localmente.</div>
    <input data-field="_apiUrlDraft" value="${esc(state._apiUrlDraft)}" placeholder="https://seu-ambiente.outsystems.app/api/caterpeu" style="width:100%;height:54px;background:var(--fieldBg);color:var(--ink);border:1px solid var(--line);border-radius:12px;padding:0 16px;font-size:14px;font-weight:500;margin-bottom:6px;">
    <div id="sync-badge" style="font-size:12px;color:var(--inkSoft);margin-bottom:20px;"></div>

    <button class="btn btn-primary" data-action="save-config">Salvar configurações</button>
    <button class="btn btn-outline-solid" style="margin-top:10px;display:flex;align-items:center;justify-content:center;gap:8px;" data-action="open-logs">${ICON.list}Ver logs de operações</button>
  </div>`;
}

function logsScreen() {
  const logs = state.logs;
  return `<div class="screen">
    <div style="font-size:13px;color:var(--inkSoft);line-height:1.5;margin-bottom:16px;">Histórico de operações realizadas no app.</div>
    ${logs.length ? logs.map((log) => `
      <div class="log-item">
        <div style="min-width:0;">
          <div class="text">${esc(log.text)}</div>
          <div class="who">${esc(log.user_name)}</div>
        </div>
        <span class="time">${esc(log.time)}</span>
      </div>`).join('') : `<div class="empty-state">Nenhuma operação registrada ainda.</div>`}
  </div>`;
}

function exportInstructionsScreen() {
  return `<div class="screen">
    <div class="warning-box" style="background:var(--chipBg);">${ICON.checkBig}<span style="font-weight:700;">Arquivo baixado: ${esc(state.lastExportFilename)}</span></div>
    <div style="font-weight:800;font-size:17px;margin-bottom:14px;">Como anexar no WhatsApp</div>
    <ol style="padding-left:20px;margin:0 0 22px;display:flex;flex-direction:column;gap:14px;">
      <li style="font-size:14.5px;line-height:1.5;">O arquivo já foi salvo na pasta de <b>Downloads</b> do seu aparelho.</li>
      <li style="font-size:14.5px;line-height:1.5;">Toque no botão abaixo para abrir o WhatsApp com a mensagem pronta.</li>
      <li style="font-size:14.5px;line-height:1.5;">Na conversa, toque no clipe de anexo.</li>
      <li style="font-size:14.5px;line-height:1.5;">Escolha <b>Documento</b> e selecione o arquivo <b>${esc(state.lastExportFilename)}</b> em Downloads.</li>
      <li style="font-size:14.5px;line-height:1.5;">Envie para o contato desejado.</li>
    </ol>
    <button class="btn btn-whats" data-action="open-whatsapp-export">${ICON.whats}Abrir WhatsApp</button>
    <button class="btn btn-outline" style="margin-top:10px;" data-action="back">Voltar ao início</button>
  </div>`;
}

/* ---------------------------------------------------------------------- *
 * Render principal
 * ---------------------------------------------------------------------- */
function screenHtml() {
  switch (state.screen) {
    case 'user-setup': return userSetupScreen();
    case 'home': return homeScreen();
    case 'novo': case 'editar': return formScreen();
    case 'detalhe': return detalheScreen();
    case 'fechar': return fecharScreen();
    case 'nota': return notaScreen();
    case 'config-lock': return configLockScreen();
    case 'config': return configScreen();
    case 'logs': return logsScreen();
    case 'export-instructions': return exportInstructionsScreen();
    default: return homeScreen();
  }
}

let _lastFocus = null;
function render() {
  const app = document.getElementById('app');
  // preserva foco/cursor em inputs de texto durante re-renders provocados por ações não relacionadas ao próprio input
  const active = document.activeElement;
  const activeField = active && active.getAttribute ? active.getAttribute('data-field') : null;
  const selStart = active && 'selectionStart' in active ? active.selectionStart : null;

  app.innerHTML = headerHtml() + screenHtml() + (state.toast ? `<div class="toast-wrap"><div class="toast">${ICON.toastCheck}${esc(state.toast)}</div></div>` : '');

  if (activeField) {
    const el = app.querySelector(`[data-field="${activeField}"]`);
    if (el) { el.focus(); if (selStart != null && el.setSelectionRange) { try { el.setSelectionRange(selStart, selStart); } catch (e) {} } }
  }
  updateSyncBadge();
}

/* ---------------------------------------------------------------------- *
 * Eventos (delegação)
 * ---------------------------------------------------------------------- */
function setByPath(obj, path, value) {
  const parts = path.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
  cur[parts[parts.length - 1]] = value;
}

function bindEvents() {
  const app = document.getElementById('app');

  app.addEventListener('input', (e) => {
    const field = e.target.getAttribute('data-field');
    if (!field) return;
    if (field === '_apiPinDraft') { state.pinInputDraft = e.target.value; return; }
    if (field === '_apiUrlDraft') { state._apiUrlDraft = e.target.value; return; }
    setByPath(state, field, e.target.value);
    if (field === 'form.client' || field === 'form.valor') {
      const btn = app.querySelector('[data-action="form-submit"]');
      if (btn) {
        const valid = state.form.client.trim() && !isNaN(num(state.form.valor));
        btn.className = 'btn ' + (valid ? 'btn-primary' : 'btn-disabled');
      }
    }
  });

  app.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;
    const action = target.getAttribute('data-action');
    const id = target.getAttribute('data-id') ? Number(target.getAttribute('data-id')) : null;

    switch (action) {
      case 'save-user-name': saveUserName(); break;
      case 'cancel-user-setup': state.screen = state.userSetupReturnScreen || 'home'; render(); break;
      case 'export-data': exportData(); break;
      case 'open-config': openConfigLock(); break;
      case 'open-whatsapp-export': openWhatsAppExport(); break;
      case 'back': goBack(); break;
      case 'config-pass-submit': submitConfigPassword(); break;
      case 'tab-andamento': state.tab = 'andamento'; render(); break;
      case 'tab-finalizados': state.tab = 'finalizados'; render(); break;
      case 'open-detalhe': openDetalhe(id); break;
      case 'open-fechar': openFechar(id); break;
      case 'open-nota': openNota(id); break;
      case 'novo': openNovo(); break;
      case 'editar': openEditar(id); break;
      case 'toggle-nf': state.form.nf = !state.form.nf; render(); break;
      case 'set-pagamento': state.form.pagamento = target.getAttribute('data-value'); render(); break;
      case 'set-maquina': state.form.maquina = target.getAttribute('data-value'); render(); break;
      case 'set-tipo': state.form.tipo = target.getAttribute('data-value'); render(); break;
      case 'form-submit': if (state.screen === 'editar') saveEdit(); else startService(); break;
      case 'close-service': closeService(); break;
      case 'pdf': { const s = state.services.find((x) => x.id === id); if (s) downloadPdf(vm(s)); break; }
      case 'send-whats': { const s = state.services.find((x) => x.id === id); if (s) sendWhats(s); break; }
      case 'toggle-pay': { const k = target.getAttribute('data-key'); state.config.payMethods[k] = !state.config.payMethods[k]; render(); break; }
      case 'save-config': saveConfig(); render(); break;
      case 'open-logs': state.screen = 'logs'; render(); break;
      case 'rename-user': state.userNameInput = state.userName || ''; state.userSetupReturnScreen = 'config'; state.screen = 'user-setup'; render(); break;
      case 'photo-form': openPhotoPicker('form'); break;
      case 'photo-close': openPhotoPicker('close'); break;
      case 'photo-form-remove': e.stopPropagation(); state.formPhotoIni = null; render(); break;
      case 'photo-close-remove': e.stopPropagation(); state.closePhotoFim = null; render(); break;
    }
  });

  document.getElementById('photo-input').addEventListener('change', handlePhotoInputChange);
}

/* ---------------------------------------------------------------------- *
 * Inicialização
 * ---------------------------------------------------------------------- */
async function loadState() {
  const [deviceId, userName, config, adminPin, apiUrl, seq, notaCounters, services, logs, syncQueue] = await Promise.all([
    dbGet('meta', 'deviceId'), dbGet('meta', 'userName'), dbGet('meta', 'config'), dbGet('meta', 'adminPin'),
    dbGet('meta', 'apiUrl'), dbGet('meta', 'seq'), dbGet('meta', 'notaCounters'),
    dbGetAll('services'), dbGetAll('logs'), dbGetAll('syncQueue')
  ]);

  if (deviceId && deviceId.value) state.deviceId = deviceId.value;
  else { state.deviceId = uuid(); await saveMeta('deviceId', state.deviceId); }

  if (userName && userName.value) { state.userName = userName.value; state.screen = 'home'; }
  else state.screen = 'user-setup';

  if (config && config.value) state.config = config.value;
  if (adminPin && adminPin.value) state.adminPin = adminPin.value;
  if (apiUrl && apiUrl.value) state.apiUrl = apiUrl.value;
  if (seq && typeof seq.value === 'number') state.seq = seq.value;
  if (notaCounters && notaCounters.value) state.notaCounters = notaCounters.value;

  state.services = services || [];
  state.logs = (logs || []).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  state.syncQueue = syncQueue || [];
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

async function init() {
  await loadState();
  bindEvents();
  registerSW();
  render();
  trySync();
}

document.addEventListener('DOMContentLoaded', init);
