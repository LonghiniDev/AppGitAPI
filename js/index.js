var userGitHub = {};
var repositoriesGitHub = [];
var infos = {};

function getProfile(){
  var obj = MobileUI.objectByForm('formUserGitHub');
  MobileUI.disable('formUserGitHub');
  MobileUI.ajax.get('https://api.github.com/users/' + obj.github_username).end(resultAjaxProfile)
}

function getRepositories(repoUrl){
  MobileUI.ajax.get(repoUrl).end(resultAjaxRepositories)
}

function resultAjaxProfile(err, res){
  MobileUI.enable('formUserGitHub');
  if(err) {
    infos.message = "ERROR 404 - Usuário Não Encontrado";
  } else {
    userGitHub = JSON.parse(res.text);
    MobileUI.show('listProfileGitHub');
  }
}