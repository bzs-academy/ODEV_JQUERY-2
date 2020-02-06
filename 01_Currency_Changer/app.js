
// Function for data loading

async function dataLoad (currencyOne, currencyTwo) {

    $('.loadEffect').fadeIn();

    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currencyOne}&to_currency=${currencyTwo}&apikey=P0I3MJY0UNTOV71J`;

    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);

    const currencyRate = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
    //console.log(currencyRate);

    currencyRate ? $('#currencyEqual').text(parseFloat(currencyRate).toFixed(5)) : alert('No available data for this currency pair ...!')

    $('.loadEffect').fadeOut();
}


// JQUERY 
$(document).ready ( function () {

    let selectedCurrency1 = 'USD - United States Dollar';
    let selectedCurrency2 = 'EUR - Euro';

    let curr1Short = selectedCurrency1.substr(0,3);
    let curr2Short = selectedCurrency2.substr(0,3);

    dataLoad(curr1Short, curr2Short);

    $('#currency1').text(curr1Short);
    $('#currency2').text(curr2Short);


    // Select-1 , if changes
    $('#select1').change(function () {

        selectedCurrency1 = $(this).children("option:selected").val();
        //console.log(selectedCurrency1);
        curr1Short = selectedCurrency1.substr(0,3);
        $('#currency1').text(curr1Short);
        // call daatLoad function
        dataLoad(curr1Short, curr2Short);
    })

    // Select-2 , if changes
    $('#select2').change(function () {

        selectedCurrency2 = $(this).children("option:selected").val();
        //console.log(selectedCurrency2);
        curr2Short = selectedCurrency2.substr(0,3);
        $('#currency2').text(curr2Short);
        // call daatLoad function
        dataLoad(curr1Short, curr2Short);
    })

    // reverse btn 
    $('#btnChng').click( () => {

        curr1Short = selectedCurrency2.substr(0,3);
        curr2Short = selectedCurrency1.substr(0,3);

        $('#currency1').text(curr1Short);
        $('#currency2').text(curr2Short);
        $('#select1').val(selectedCurrency2);
        $('#select2').val(selectedCurrency1);
        // call daatLoad function
        dataLoad(curr1Short, curr2Short);
    })

    // calculation part
    $('#input1').keyup( function () {
        let input1Value = $(this).val();
        let currencyValue = parseFloat($('#currencyEqual').text());
        let result = (input1Value * currencyValue).toFixed(2);
        $('#input2').val(result);
    })
})