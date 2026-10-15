/* Page-specific logic for signin.html. Relies on common.js (loaded first)
   for I18N/t/applyLang and the attemptSignIn/attemptSignUp/getSession/
   signOut/escapeHtml auth helpers. */
(function(){
  const authHeading = document.getElementById('authHeading');
  const authFormWrap = document.getElementById('authFormWrap');
  const authForm = document.getElementById('authForm');
  const authEmail = document.getElementById('authEmail');
  const authPassword = document.getElementById('authPassword');
  const authError = document.getElementById('authError');
  const authSubmit = document.getElementById('authSubmit');
  const tabSignIn = document.getElementById('tabSignIn');
  const tabSignUp = document.getElementById('tabSignUp');
  const alreadyIn = document.getElementById('alreadyIn');
  const alreadyText = document.getElementById('alreadyText');
  const switchAccountBtn = document.getElementById('switchAccountBtn');
  let authMode = 'signin';

  function setAuthMode(mode){
    authMode = mode;
    tabSignIn.classList.toggle('active', mode==='signin');
    tabSignUp.classList.toggle('active', mode==='signup');
    authPassword.setAttribute('autocomplete', mode==='signin' ? 'current-password' : 'new-password');
    authError.textContent = '';
    const label = mode==='signin' ? t('signInBtn') : t('createAccountBtn');
    authSubmit.textContent = label;
    authHeading.textContent = label;
  }
  tabSignIn.addEventListener('click', ()=> setAuthMode('signin'));
  tabSignUp.addEventListener('click', ()=> setAuthMode('signup'));

  function redirectTarget(){
    const params = new URLSearchParams(window.location.search);
    return params.get('redirect') || 'index.html';
  }

  function showAlreadySignedIn(){
    const email = getSession();
    authHeading.textContent = t('signInBtn');
    authFormWrap.style.display = 'none';
    alreadyIn.style.display = 'block';
    alreadyText.innerHTML = `${t('alreadySignedIn')} <b>${escapeHtml(email)}</b>`;
  }

  if(getSession()){
    showAlreadySignedIn();
  }

  switchAccountBtn.addEventListener('click', ()=>{
    signOut();
    alreadyIn.style.display = 'none';
    authFormWrap.style.display = 'block';
    authForm.reset();
    setAuthMode('signin');
  });

  authForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    authError.textContent = '';
    authSubmit.disabled = true;
    const email = authEmail.value;
    const pw = authPassword.value;
    const result = authMode === 'signup'
      ? await attemptSignUp(email, pw)
      : await attemptSignIn(email, pw);
    authSubmit.disabled = false;
    if(!result.ok){ authError.textContent = t(result.error); return; }
    window.location.href = redirectTarget();
  });

  setAuthMode('signin');
})();
