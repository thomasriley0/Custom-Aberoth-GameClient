GameClient.prototype.modHandler = function modHandler() {
  document.querySelectorAll('.modClickRegion').forEach(item => {
    item.addEventListener('click', event => {
        modName = item.childNodes[1].childNodes[1].getAttribute('id')
        
        if(app.game.playerName != "") {
          if (modName == "autoFollow") this.toggleAutoFollow()
          if (modName == "autoAttack") this.toggleAutoAttack()
          if (modName == "potionPickup") this.togglePotionPickup()
        }
       
    })
  })

  //mod settings event listener
  document.querySelectorAll('.modSettingsGearSVG').forEach(item => {
    item.addEventListener('click', event => {
        modName = item.getAttribute('id')

        if (modName == "followTargetSettings") this.toggleAutoFollowSettings()
    })
  })

    //mod settings save event listener
  document.querySelectorAll('.settingsToggleBtn').forEach(item => {
    item.addEventListener('click', event => {
        modName = item.getAttribute('id')

        if (modName == "autoFollowToggle") this.toggleAutoFollowSettings()
    })
  })
}
