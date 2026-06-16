document.addEventListener('DOMContentLoaded', function () {
  var currentLocale = 'en'

  var langToggle = document.getElementById('langToggle')
  var langElements = document.querySelectorAll('[data-pt]')
  var pdfLink = document.getElementById('pdfLink')

  function setLocale(locale) {
    currentLocale = locale
    langElements.forEach(function (el) {
      el.textContent = el.getAttribute('data-' + locale)
    })
    if (langToggle) {
      langToggle.textContent = locale === 'pt' ? 'EN' : 'PT'
    }
    if (pdfLink) {
      pdfLink.href = 'pdfs/Pedro_Caldas_Data_Analyst-' + locale + '.pdf'
    }
  }

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      setLocale(currentLocale === 'pt' ? 'en' : 'pt')
    })
  }

  // Project toggle
  document.querySelectorAll('[data-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('data-toggle')
      var details = document.getElementById(targetId)
      if (!details) return
      var isHidden = details.classList.contains('hidden')
      if (isHidden) {
        details.classList.remove('hidden')
        btn.textContent = btn.getAttribute('data-less')
      } else {
        details.classList.add('hidden')
        btn.textContent = btn.getAttribute('data-more')
      }
    })
  })
})