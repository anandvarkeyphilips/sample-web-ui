export default function ListView({message, employees}) {
  // Create an array of employees with id, name, salary, department

  // Create JSX to display the list of employees as table
  return (
    <div>
      <h1>{message}</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => {
            return (
              <tr key={index}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.salary}</td>
                <td>{emp.department}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
