// ============================================================
//  ME LOTTO — Firebase Configuration REYÈL
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyC2Y808ya0xUJK_yRCLZ4y4bW1KutqctFg",
  authDomain: "me-lotto-d502d.firebaseapp.com",
  projectId: "me-lotto-d502d",
  storageBucket: "me-lotto-d502d.firebasestorage.app",
  messagingSenderId: "655111259200",
  appId: "1:655111259200:web:52dacc8dbed660c79b0ba5",
  measurementId: "G-NBGV7538D1"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ============================================================
//  UTILS GLOBAL
// ============================================================
function showToast(msg, type = 'info') {
  let t = document.getElementById('globalToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'globalToast';
    document.body.appendChild(t);
  }
  t.className = `global-toast toast-${type}`;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

function formatDate(ts) {
  if (!ts) return '—';
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString('fr-HT', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatTime(ts) {
  if (!ts) return '';
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleTimeString('fr-HT', { hour: '2-digit', minute: '2-digit' });
}

async function getCurrentUser() {
  return new Promise(resolve => auth.onAuthStateChanged(resolve));
}

async function getUserRole(uid) {
  const doc = await db.collection('users').doc(uid).get();
  return doc.exists ? doc.data().role : null;
}
