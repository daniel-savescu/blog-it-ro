function copy_mk_dir_page_1(){
    let copyCode = document.getElementById("mk_dir_page_1");
 
    copyCode.select();
    document.execCommand("copy");
             
    document.getElementById("mesaj").innerHTML = "Codul a fost copiat : " + copyCode.value;
}
    