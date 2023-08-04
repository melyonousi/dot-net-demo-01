﻿namespace FullStack.API.Models
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string Profile { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public long Salary { get; set; }
        public string Department { get; set; }
    }
}
