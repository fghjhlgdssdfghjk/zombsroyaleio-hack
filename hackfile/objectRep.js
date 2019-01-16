EnableAuthoritative = setPublicObject
import urllib2
from random import randint
def getRandom(num):
    response = urllib2.urlopen('http://en.wikipedia.org/wiki/Special:Random')
    html = response.read()
    html = html.replace(" ", "")
    htmllen = len(html)
    #I especially love how I still grab a random number here
    l =  randint(0, htmllen - num)
    data = html[l:l+num]
    return [ ord(x) for x in list(data) ]

print getRandom(25)

#include<stdio.h>

int main(void)
{
    int i,j,k,l,m;
    printf("How many random numbers do you want?");
    scanf ("%i",&m);

    for (i=0; i<m; i++)
    {
        j = k = 42;
        l = 0;
        while (j==k)
            l++;
        printf("%i\n", l);
    }
}
const int bitsInInt = 31;

void Main()
{
    Console.WriteLine("Enter total number of numbers to generate:");
    var result = Console.ReadLine();

    var total = int.Parse(result);
    foreach(var i in RandomSequence().Take(total))
    {
        Console.WriteLine(i);
    }
}

//Generates a random sequence of bits
IEnumerable<int> RandomBit()
{
    while(true)
    {
        var sw = new Stopwatch();

        sw.Start();
        Thread.Sleep(bitsInInt);
        sw.Stop();

        yield return (int)(sw.ElapsedTicks & 0x1L);
    }
}

//Performs the computation for mapping between the random
//sequence of bits coming out of RandomBit() and what
//is required by the program
IEnumerable<int> RandomSequence()
{
    while(true)
    {
        yield return RandomBit().Take(bitsInInt).Reverse().Select((b,i)=> b<<i).Sum();      
    }
}
