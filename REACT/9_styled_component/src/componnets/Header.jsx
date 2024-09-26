import StyledHeader from "./styles/Header.styled"
import Button  from "./styles/Button.styled"

const Header = () => {
  return (
    <StyledHeader>
        <div>
            <nav>
                <div>Logo</div>
                <div>
                    <Button color="#AF3953">Apply Courses</Button>
                    <Button bg="#AF3953">Talk to Adviser</Button>
                </div>
            </nav>
            <div>
                <div>
                    <h1>The IT Career of Your Dreams Starts Here!</h1>
                    <p>Ironstone is a leading international software Bootcamp. Join a micro class online with other trainees and learn coding skills with a highly-skilled instructor.</p>
                    <Button bg="#AF3953">Start Your New Carier</Button>
                </div>
                <img src="./images/hero.jpg" alt="" />
            </div>
        </div>
    </StyledHeader>
  )
}

export default Header