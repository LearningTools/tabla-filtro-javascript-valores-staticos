/********Definimos las variables que van hacer globales*******/

var stars = document.querySelectorAll('.star');
var btn_filtro = document.querySelectorAll('.btn-filter');
var cheked_label = document.querySelectorAll('.ckbox label');
/******** Evento que se ejecuta cuando la pagina ya alla cargado*******/
window.addEventListener("load", function () {
	// Ejecutamos las funciones si existen en el DOM o la pagina por ejemplo

	//Identificar cual posicion de las clases btn-filter
	if (btn_filtro.length > 0) {
		// Evento click de ejemplo
		btn_filtro.forEach(function(elem_btn){
			elem_btn.addEventListener('click', function(){
				funt_filtro(elem_btn);
			})
		});//end foreach
	}

	if (stars.length > 0) {
		stars.forEach(function(elem_star){
			elem_star.addEventListener('click', function(){
				elem_star.classList.toggle('star-checked');
			})
		});
	}

	if (cheked_label.length > 0) {
		cheked_label.forEach(function(elem_label){
			elem_label.addEventListener('click', function(){
				this.parentNode.parentNode.parentNode.classList.toggle('selected');
			})
		})
	}

}); // Cierre del evento load

/************ Mis funciones *************/
function funt_filtro(elem){
	//alert('click in : ' + elem.dataset.target);
	var target = elem.dataset.target;
	var col = document.querySelectorAll('.table tr');
	//console.log(target);
	if (target != 'all') {
		//console.log(target + ' target');		
		col.forEach(function(elem_col, index){
			valor = elem_col.getAttribute('data-status', target);
			if (valor != target) {
				elem_col.style.display = 'none';
			} else {
				elem_col.style.display = 'table-row';
			}
		});
	} else{
		col.forEach(function(elem_col, index){
			elem_col.style.display = 'table-row';
		});
	}
}
