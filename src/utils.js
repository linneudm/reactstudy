

export const bootstrapCols = (col) => {
	return `col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col} col-${col} no-pg-lt`;
};

export const bootstrapCols2 = (col) => {
	return `col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col} col-${col}`;
};

export const formatCpfCnpj = (value) => {
	if(value){
		if(value.length === 11)
			return `${value.slice(0,3)}.${value.slice(3,6)}.${value.slice(6,9)}-${value.slice(9,11)}`

		else if(value.length >= 14)
			return `${value.slice(0,2)}.${value.slice(2,5)}.${value.slice(5,8)}/${value.slice(8,12)}-${value.slice(12,14)}`
		return value;
	}
}

export const formatPlaca = (value) => {
	if(value){
		if(/^\d+$/.test(value)) return value
		else if(value.length >= 7)
			return `${value.slice(0,3)}-${value.slice(3,value.length)}`	
		else
			return value;
	}
}