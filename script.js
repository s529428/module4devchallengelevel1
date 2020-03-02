$(document).ready(function(){
    $("#calculate").click(function(){
        let anwer = Number($("input[name='radius']").val()) * Number($("input[name='radius']").val()) * (Math.PI)
        let ranwer = Math.round(anwer);
        $("#answer").text(anwer);
        $("#answer2").text(ranwer);
    });
});