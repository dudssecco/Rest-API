class HomeCtrl {
  index(req, res){
    res.json({
      TudoCerto: true
    })
  }
}

export default new HomeCtrl
