import UserProfile from "@/Components/UserProfile";
import { render, screen } from "@testing-library/react";

describe("--USER-PROFILE--", () => {
  test("the person jobStatus should be working", () => {
    render(
      <UserProfile
        name="abiRam"
        email="abi@gmail.com"
        role="SE"
        working={true}
      />
    );
    expect(screen.getByText(/Working/)).toBeInTheDocument()
  });

  test('should have name with more than 10 letters' , ()=>{
    render(<UserProfile name='helloooooo' />)

        //  expect(screen.getByText(/.*\.\.\./)).toBeInTheDocument()
        // ? (.* -> dynamic value , \.\.\. -> static value)

    //? what if another tag has "..."   
    //* checking "..." with partial content
    const nameTag = screen.getByText(/Name/)
    expect(nameTag).toHaveTextContent(/.*\.\.\./) 
  })
  
});
