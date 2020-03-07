Crear una rama
git branch nombreDeLaRama  -- Crear rama
git checkout nombreDeLaRama -- Pocisionarse en la nueva rama
-- hacer las modificaciones
git add .
git commit -am "Mensaje de modificación"

git checkout master -- Te ubicas en la rama principal

git merge nombreDeLaRama --  Mezclar, traer los cambios de la rama la nueva rama a la rama master. Además se trae el nombre del commit del cambio anterior.

git checkout nombreDeLaRama -- Nos ubicamos en la nueva rama

git fetch -- actualizamos los cambios en la nueva rama

git push origin nombreDeLaRama  -- Subimos la nueva rama

git branch -d nombreDeLaRama  -- eliminamos la rama de local

git push origin :nombreDeLaRama  -- eliminamos la rama del repositorio

git branch -- Visualizar ramas activas

git branch -r -- Visualizar ramas remotas