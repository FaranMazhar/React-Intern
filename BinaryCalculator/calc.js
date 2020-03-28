btn1.innerHTML = 1;
btn0.innerHTML = 0;
res.innerHTML = '';
btnSum.innerHTML = '+';
btnSub.innerHTML = '-';
btnMul.innerHTML = '*';
btnDiv.innerHTML = '/';
let check = function ()
{
  let c;
  for (c = 0; res.innerHTML[c] != /\d/;c++);
}
let add = function ()
{
    let x = '';
    let y = '';
    let i;
    for(i = 0; res.innerHTML[i]!= '+'; i++)
        {
            x += res.innerHTML[i];
        }
    for(let j = i + 1; j < res.innerHTML.length; j++)
        {
            y += res.innerHTML[j];
        }
   let result = Number(parseInt(x, 2)) + Number(parseInt(y, 2));
    return result.toString(2);
}
let sub = function ()
{
    let x = '';
    let y = '';
    let i;
    for(i = 0; res.innerHTML[i]!= '-'; i++)
        {
            x += res.innerHTML[i];
        }
    for(let j = i + 1; j < res.innerHTML.length; j++)
        {
            y += res.innerHTML[j];
        }
   let result = Number(parseInt(x, 2)) - Number(parseInt(y, 2));
    return result.toString(2);
}
let mul = function ()
{
    let x = '';
    let y = '';
    let i;
    for(i = 0; res.innerHTML[i]!= '*'; i++)
        {
            x += res.innerHTML[i];
        }
    for(let j = i + 1; j < res.innerHTML.length; j++)
        {
            y += res.innerHTML[j];
        }
   let result = Number(parseInt(x, 2)) * Number(parseInt(y, 2));
    return result.toString(2);
}
let div = function ()
{
    let x = '';
    let y = '';
    let i;
    for(i = 0; res.innerHTML[i]!= '/'; i++)
        {
            x += res.innerHTML[i];
        }
    for(let j = i + 1; j < res.innerHTML.length; j++)
        {
            y += res.innerHTML[j];
        }
   let result = Number(parseInt(x, 2)) / Number(parseInt(y, 2));
    return result.toString(2);
}
btn1.onclick = function ()
  {
        res.innerHTML = res.innerHTML + btn1.innerHTML;
  }
btn0.onclick = function ()
{
        res.innerHTML = res.innerHTML + btn0.innerHTML;
}
btnClr.onclick = function ()
{
    res.innerHTML = '';
}
btnSum.onclick = function ()
{
    res.innerHTML = res.innerHTML + btnSum.innerHTML;
}
btnSub.onclick = function ()
{
    res.innerHTML = res.innerHTML + btnSub.innerHTML;
}
btnMul.onclick = function ()
{
    res.innerHTML = res.innerHTML + btnMul.innerHTML;
}
btnDiv.onclick = function ()
{
    res.innerHTML = res.innerHTML + btnDiv.innerHTML;
}
   btnEql.onclick = function ()
{
     let check = 0;
    for (; (res.innerHTML[check] == '0' || res.innerHTML[check] == '1') && check < res.innerHTML.length; check++);
    if (res.innerHTML[check] == '+')
        {
            res.innerHTML = add();
        }
    else if (res.innerHTML[check] == '-')
        {
            res.innerHTML = sub();
        }
    else if (res.innerHTML[check] == '*')
        {
            res.innerHTML = mul();
        }
    else if (res.innerHTML[check] == '/')
        {
            res.innerHTML = div();
        }
}
