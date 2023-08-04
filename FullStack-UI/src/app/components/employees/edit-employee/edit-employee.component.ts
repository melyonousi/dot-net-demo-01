import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
})
export class EditEmployeeComponent {

  employeeDetails: Employee = {
    id: '',
    fullName: '',
    profile: '',
    email: '',
    phone: '',
    salary: 0,
    department: ''
  }

  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')

        if (id) {
          this.employeeService.getEmployee(id).subscribe({
            next: (response) => {
              this.employeeDetails = response
            }
          })
        }
      }
    })
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeDetails).subscribe({
      next: (response) => {
        this.router.navigate(['employees'])
      }
    })
  }

  openModal(dialog: any) {
    if (dialog) {
      dialog.showModal()
    }
  }

  deleteEmployee(dialog: any) {
    this.employeeService.deleteEmployee(this.employeeDetails.id).subscribe({
      next: (response) => {
        dialog.close()
        this.router.navigate(['employees'])
      }
    })
  }
}
