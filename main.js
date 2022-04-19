toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  } 

  const form = document.querySelector('#myForm');
  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if ($('#cgpa').val() == '' || $('#number').val() == '' || $('#english').val() == '' || $('#arabic').val() == ''
        || $('#dollar').val() == '' || $('#sar').val() == '' || $('#us_date').val() == '' || $('#saeu').val() == '') 
    {
        toastr.warning("Please Fill All Feilds!!");
        return false;
    }
    
    // string validation
    if (!isString($('#english').val())) {
        toastr.error("Enter Valid String!!");
        $('#english').addClass('error');
        return false;
    }

    if (!isSaeuDate($('#saeu').val())) {
        toastr.error("Enter Date in DD/MM/YYYY format only"); 
        $('#saeu').addClass('error');
        return false;
    }
    if (!isUsDate($('#us_date').val())) {
        toastr.error("Enter Date in MM/DD/YYYY format only"); 
        $('#us_date').addClass('error');
        return false;
    }
    let res = isValidate($('#input').val());
    if (res == 0) {
        toastr.error("Enter Date in MM/DD/YYYY format only"); 
        return false;
    }else if(res == 1){
        toastr.error("Enter Date in YYYY/MM/DD format only"); 
        return false;
    }
    if (!isFloat(Number($('#cgpa').val()))) {
        toastr.error("Enter CGPA in decimal number"); 
        $('#cgpa').addClass('error');
        return false;
    }
    if (!isDollar($('#dollar').val())) {
        toastr.error("Enter Dollar Currency Only!!"); 
        $('#dollar').addClass('error');
        return false;
    }
    if (!isSar($('#sar').val())) {
        toastr.error("Enter Sar Currency Only!!"); 
        $('#sar').addClass('error');
        return false;
    }
    if (!isEnglish($('#english').val())) {
        toastr.error("Enter English Country Only!!"); 
        $('#english').addClass('error');
        return false;
    }
    if (!isArabic($('#arabic').val())) {
        toastr.error("Enter Arabic Country Only!!"); 
        $('#arabic').addClass('error');
        return false;
    }
    
    toastr.success("Data saved succefully"); 
    
   
  });

function isString(str) {
    var letters = /^[A-Za-z]+$/;
    if(str.match(letters))
    {
    return true;
    }
    else
    {
    return false;
     
    }

}
function isValidate(date) {
    if ($('#default').text() == 'mm/dd/yyyy') {
        let dateRegex = /^(?:(0[1-9]|1[012])[\- \/.](0[1-9]|[12][0-9]|3[01])[\- \/.](19|20)[0-9]{2})$/;
        if(!dateRegex.test(date)){
            return 0;
        }
    }else{
        let saeu_date = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/;
        if(!saeu_date.test(date)){
            return 1;
        }
    }
}
function isUsDate(date) {
    let dateRegex = /^(?:(0[1-9]|1[012])[\- \/.](0[1-9]|[12][0-9]|3[01])[\- \/.](19|20)[0-9]{2})$/;
    return  dateRegex.test(date);
}
function isSaeuDate(date) {
    let saeu_date = /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
    return  saeu_date.test(date);
}
function isArabic(text) {
    let arabic = /[\u0600-\u06FF]/;
    return  arabic.test(text);
}
function isEnglish(text) {
    let english = /[A-Za-z ]/g;
    return english.test(text);
}
function isDollar(text) {
    let dollar  = /^\d+(?:\.\d{0,2})$/;
    return dollar.test(text);
}
function isSar(text) {
    
    let sar  = /^\d+(?:\.\d{0,2})$/;
    return sar.test(text);
}
function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}