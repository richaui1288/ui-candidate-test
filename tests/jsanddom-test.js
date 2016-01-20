/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );


});

/********************************
Please create your tests below...
********************************/
test("reverseing string ", 2, function(){

	equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

	ok( reverseString("stringreverse"), "esrevergnirts", "reverseString should return esrevergnirts");

});	

test("find minimum value", 2, function(){
	
	equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );
	var arr = [1, 2, 3, 4, 5];
	ok( findMinValue(arr), 1, "findMinValue function should return minimum value");


}); 

test("get Distinct Values from array", 2 , function(){

	equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

	var arr = [1, 2, 3, 3, 4, 4, 4, 5];

	ok( findDistinctValues(arr).length, 5, "findDistinctValues function should return distinct value");

});

test("doFizzBuzz", 1 , function(){

	equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

});

test("remove Fruits", 2 , function(){

	equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

	var arr1 = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var arr2 = ['pear', 'banana'];

	ok( removeFruits(arr1, arr2).length, 5, "findDistinctValues function should return arr of length 5");

});


test("splitList string using delimeter comma", 2 , function(){

	equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

	ok( splitListStrUsingComma("string1, string2").length, 2, "splitListStrUsingComma function should return array of 2 values");

});

test("sum of list in array", 2 , function(){

	equal( typeof sum, 'function', 'Must contain a sum function' );

	var arr = [1, 2, 3, 4, 5];
	ok( sum(arr), 15, "sum function should return sum all all values in array");

});


test("Data Table object", 8 , function(){

	equal( typeof DataTable, 'function', 'Must contain a DataTable function' );
	var dataTable = DataTable();
	equal( typeof dataTable.addColumns, 'function', 'Must contain a addColumns public function' );
	equal( typeof dataTable.addRows, 'function', 'Must contain a addRows public function' );
	equal( typeof dataTable.getData, 'function', 'Must contain a getData public function' );
	equal( typeof dataTable.columns, 'undefined', 'Must contain a getData public function' );
	equal( typeof dataTable.rows, 'undefined', 'Must contain a getData public function' );

	dataTable.addColumns('column1', 'column2', 'column3');

	ok( dataTable.getData().length, 3, "dataTable should return 3 columns");

	dataTable.addRows('value1A', 'value1B', 'value1C');

	ok( dataTable.getData()[0][0], 'value1A', "dataTable should return 3 columns");

});


