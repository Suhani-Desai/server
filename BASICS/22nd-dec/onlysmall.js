const str='UGcJaJtKL'
let result=''
for(let i=0;i<str.length;i++)
{
    if(str[i]==str[i].toLowerCase())
    {
        result=result+str[i]
    }
}
console.log(result)