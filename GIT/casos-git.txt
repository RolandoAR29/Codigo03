Caso: Descargar proyecto de repositorio

Clonar en un repositorio local
git clone https://gitlab.com/codigo03/ecommercepumbix.git
npm i
git checkout componentes_angular
git pull origin componentes_angular


Caso: Trabajo en RAMA_EQUIVOCADA y deseo que estén en RAMA_DESEADA

VAriables :
RAMA_EQUIVOCADA
RAMA_DESEADA

Hacer commit en RAMA_EQUIVOCADA
Ir a RAMA_DESEADA --> git checkout 'RAMA_DESEADA'
Traer cambios de RAMA_EQUIVOCADA --> git merge 'RAMA_EQUIVOCADA'
Hacer push en rama deseda --> git push origin 'RAMA_DESEADA'
Ir a RAMA_EQUIVOCADA -->git checkout 'RAMA_EQUIVOCADA'
Eliminar cambio (commit) -->git reset --hard HEAD~1
