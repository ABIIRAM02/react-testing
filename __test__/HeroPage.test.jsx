import HeroPage from "@/Components/HeroPage"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event';

describe('--HOME_PAGE--' , ()=>{
    describe('HomeElements-should-presence' , ()=>{
        test('check-h2-content' , ()=>{
            render(<HeroPage />)
            expect(screen.getByText('hello abii')).toBeInTheDocument()
        })
    
        test('check-btn-content' , ()=>{
            render(<HeroPage />)
            expect(screen.getByRole('button' , { name : 'Click Me' })).toBeInTheDocument()
        })
    
        // ? it() and test() are same
        it('should render label with Enter something Basted' , ()=>{
            render(<HeroPage />)
            expect(screen.getByLabelText(/basted/)).toBeInTheDocument() // ? /somthing/ no need to type the entire sentence or word *(CaseSentitive)*
        })
    
        it('shlould find input with placeholder Search...' , ()=>{
            render(<HeroPage />)
            expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument()
        })
    
        test('find input by value' , ()=>{
            render(<HeroPage />)
            expect(screen.getByDisplayValue(/Good Day/)).toBeInTheDocument()
        })
        
    })
    
    describe('HomeElements-should-absence' , ()=>{
        test('toggle btn text should not tobe present for initial render' , ()=>{
            render(<HeroPage />)

            //TODO use QUERYBYTEXT to check absence
            expect(screen.queryByText(/Hakunamatata/)).not.toBeInTheDocument()
        })    

        test('toggle-btn-behavior' , async ()=>{
            render(<HeroPage />)

            // ? not tobe visible before click
            expect(screen.queryByText(/Hakunamatata/)).not.toBeInTheDocument()
            
            // * accessing btn
            const toggleBtn = screen.getByRole('button' , {name : 'Toggle Text'})
            
            // ? tobe visible after click
            await userEvent.click(toggleBtn)
            expect(screen.getByText(/Hakunamatata/)).toBeInTheDocument()
        })

        test('timeout-toggle-btn-behavior' , async ()=>{
            render(<HeroPage />)
            expect(screen.queryByText(/Boom/)).not.toBeInTheDocument()

            const timeoutBtn = screen.getByRole('button' , {name : 'Toggle Timeout Text'})

            await userEvent.click(timeoutBtn)

            // ? Method 1
            //TODO use FINDBYTEST for async operations like setTimeOut()
            //! Add { timeout : } as third argument.
            expect(await screen.findByText(/Boom/ , {} , {timeout : 4000})).toBeInTheDocument()
           
            // ? Method 2 waitFor()
            // await waitFor(
            //     ()=>{expect(screen.getByText(/Boom/)).toBeInTheDocument()} , 
            //     {timeout : 4000}
            // )
        })

    })
})