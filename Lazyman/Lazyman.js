/**
 * Created by Administrator on 2017/3/16.
 */
class _Lazyman {

	constructor ( name ) {
		this.tasks = [];
		let task = (name => () => {
			console.log ( `Hi! This is ${name} !` );
			this.next ();
		}) ( name );
		this.tasks.push ( task );
		setTimeout ( () => {
			this.next ();
		}, 0 );

	}

	next () {
		let task = this.tasks.shift ();
		task && task ();
	}

	eat ( food ) {
		let task = (food => () => {
			console.log ( `Eat ${food}` );
			this.next ();
		}) ( food );
		this.tasks.push ( task );
		return this;
	}

	sleep ( time ) {
		let task = (time => () => {
			setTimeout ( () => {
				console.log ( `Wake up after ${time} s!` );
				this.next ();
			}, time * 1000 )
		}) ( time );
		this.tasks.push ( task );
		return this;
	}

	sleepFirst ( time ) {
		let task = (time => () => {
			setTimeout ( () => {
				console.log ( `Wake up after ${time} s!` );
				this.next ();
			}, time * 1000 )
		}) ( time );
		this.tasks.unshift ( task );
		return this;
	}

}


function Lazyman ( name ) {
	return new _Lazyman ( name );
}

module.exports = Lazyman;