class ItemActions {
	public static add(item: Item): void {
		app.dispatcher.dispatch({
			actionType: "add",
			data: item
		})
	}
	
	public static remove(id: number): void {
		app.dispatcher.dispatch({
			actionType: "delete",
			data: id
		})
	}
}