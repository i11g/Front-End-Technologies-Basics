namespace Reading_An_Array_From_A_Singel_Line
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string value=Console.ReadLine();

            string[] items = value.Split(' ');

            int[] arr = new int[items.Length];

            for (int i = 0; i < items.Length; i++)
            {
                arr[i] = int.Parse(items[i]);
            }
            foreach (int ar in arr)
            {
                Console.WriteLine(ar);
            }
        }
    }
}