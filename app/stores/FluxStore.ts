interface IFluxPayload {
	actionType: string;
	
	data: any;
}

abstract class FluxStore<IFluxPayload> {
	private dispatcher: Flux.Dispatcher<IFluxPayload>;
	
	private listeners: Array<Function>;
	
	constructor(dispatcher: Flux.Dispatcher<IFluxPayload>) {
		this.dispatcher = dispatcher;
		this.dispatcher.register((p) => { this.__onDispatch(p); });
		
		this.listeners = [];
	}
	
	public addListener(callback: Function): Function {
		var listenerId: string = Date.now().toString();
		this.listeners[listenerId] = callback;
		
		var self: FluxStore<IFluxPayload> = this;
		
		return function() {
			delete self.listeners[listenerId];
		};
	}
	
	public getDispatcher(): Flux.Dispatcher<IFluxPayload> {
		return this.dispatcher;
	}
	
	protected __onDispatch(payload: IFluxPayload): void {
		for(var key in this.listeners) {
			var callback = this.listeners[key];
			callback(payload);
		}
	}
}