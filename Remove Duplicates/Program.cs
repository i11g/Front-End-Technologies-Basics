namespace Remove_Duplicates
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] num = Console.ReadLine().Split(',');

            string[] duplicate = new string[num.Length];
            int duplicatesFound = 0;
            for (int i= 0;  i<num.Length-1; i++)
            {
                
                if (num[i] == num[i+1])
                {
                    duplicatesFound++;
                    continue;
                }
                duplicate[i] = num[i];
                duplicate[num.Length-1] = num[num.Length-1];
            }
            string[] nonSpaces= new string[duplicate.Length-duplicatesFound];
            int index = 0;
            for (int i= 0; i < duplicate.Length; i++)
            {
                if (duplicate[i]!=null)
                nonSpaces[index++] = duplicate[i];
            }

            Console.WriteLine(string.Join(',',nonSpaces));
        }
    }
}