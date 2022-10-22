img = document.querySelectorAll('.right > .img')
bg = document.querySelectorAll('main > .right > .color')
icon = document.querySelectorAll('footer ul li')

function remove(){
	Array.from(img).forEach(i => {
		i.classList.remove('active')
	})
	Array.from(bg).forEach(b => {
		b.classList.remove('active')
	})
}
function addClass(num=1){
	Array.from(img).forEach(i => {
		if (i.dataset.num == num){
			i.classList.add('active')
		}
	})
	Array.from(bg).forEach(b => {
		if (b.dataset.num == num){
			b.classList.add('active')
		}
	})
}
Array.from(icon).forEach(i => {
	i.addEventListener('click', e => {
		remove()
		addClass(i.dataset.num)
	})
})