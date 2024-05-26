// grab all the query
const inputm=document.querySelector('.inputm')
const input1=document.querySelector('.input1')
const input2=document.querySelector('.input2')
const input3=document.querySelector('.input3')
const input4=document.querySelector('.input4')








let        mcount=0;
let        m1=0;
let        m2=0;
let        m3=0;
let        m4=0;



// buttons
const      rst=document.querySelector('#rst')
const      btnp1=document.querySelector('.btnp1')
const      btnp2=document.querySelector('.btnp2')
const      btnp3=document.querySelector('.btnp3')
const      btnp4=document.querySelector('.btnp4')

const      btnm1=document.querySelector('.btnm1')
const      btnm2=document.querySelector('.btnm2')
const      btnm3=document.querySelector('.btnm3')
const      btnm4=document.querySelector('.btnm4')

rst.addEventListener('click',()=>{
    window.location.reload();
})


btnp1.addEventListener('click',()=>{
inputm.value=++mcount;
input1.value=++m1;
})

btnm1.addEventListener('click',()=>{
    if         (mcount>=1)inputm.value=--mcount;
    if         (mcount<1)inputm.value='ZERO';
    if         (m1>=1)input1.value=--m1;
    if         (m1<1)input1.value='ZERO';
})



btnp2.addEventListener('click',()=>{
    inputm.value=++mcount;
    input2.value=++m2;
    })

btnm2.addEventListener('click',()=>{
    if         (mcount>=1)inputm.value=--mcount;
    if         (mcount<1)inputm.value='ZERO';
    if         (m2>=1)input2.value=--m2;
    if         (m2<1)input2.value='ZERO';
})  

btnp3.addEventListener('click',()=>{
    inputm.value=++mcount;
    input3.value=++m3;
    })

btnm3.addEventListener('click',()=>{
    if         (mcount>=1)inputm.value=--mcount;
    if         (mcount<1)inputm.value='ZERO';
    if         (m3>=1)input3.value=--m3;
    if         (m3<1)input3.value='ZERO';
})  

btnp4.addEventListener('click',()=>{
    inputm.value=++mcount;
    input4.value=++m4;
    })

btnm4.addEventListener('click',()=>{
    if         (mcount>=1)inputm.value=--mcount;
    if         (mcount<1)inputm.value='ZERO';
    if         (m4>=1)input4.value=--m4;
    if         (m4<1)input4.value='ZERO';
})  