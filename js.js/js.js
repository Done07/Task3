let bar = prompt("Enter your word");
let number = 0;
if (bar.length < 5) {
    alert("Try Again");
}
else
{
    switch (bar.charAt(0)) {
        case 'a':
        case 'e':
        case 'u':
        case 'i':
        case 'o':
            number+=4 
            break;
        case 'z':
            number+=5
            break;
        default:
            number-=1
            break;
    }
    switch (bar.charAt(1)) {
        case 'a':
        case 'e':
        case 'u':
        case 'i':
        case 'o':
            number+=4 
            break;
        case 'z':
            number+=5
            break;
        default:
            number-=1
            break;
    }
    switch (bar.charAt(2)) {
        case 'a':
        case 'e':
        case 'u':
        case 'i':
        case 'o':
            number+=4 
            break;
        case 'z':
            number+=5
            break;
        default:
            number-=1
            break;
    }
    alert("Yor number is " + number);

}