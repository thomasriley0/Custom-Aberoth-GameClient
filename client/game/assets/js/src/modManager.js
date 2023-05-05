//mod event listener

document.querySelectorAll('.modClickRegion').forEach(item => {
    item.addEventListener('click', event => {
        item.childNodes[1].childNodes[1].classList.toggle("active");
        modName = item.childNodes[1].childNodes[1].getAttribute('id')
        

        if (modName == "autoHit") toggleAutoHit()
        if (modName == "autoPickup") togglePotionPickup()
        if (modName == "autoFollow") toggleAutoFollow()
    })
  })

  //mod settings event listener
  document.querySelectorAll('.modSettingsGearSVG').forEach(item => {
    item.addEventListener('click', event => {
        modName = item.getAttribute('id')

        if (modName == "followTargetSettings") toggleAutoFollowSettings()
    })
  })