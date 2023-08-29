interface ButtonProps {
	text: string,
	isLoading: boolean,
}

const Button = ({ text, isLoading }: ButtonProps) => {
	const loaderStyle = 'inline-block w-6 h-6 border-2 border-solid border-[#6FD273] border-b-[#FFFFFF] rounded-full animate-spin'
	const buttonStyle = `w-[120px] h-[52px] rounded-xl border-none text-[#FFFFFF] font-semibold text-base bg-[#00B627] 
		${isLoading ? 
			'flex justify-center items-center' : 
			'block cursor-pointer hover:bg-[#0C9E12] focus:border-2 focus:border-solid focus:border-[#262636]'}`;
  
	return (
		<button className={buttonStyle} disabled={isLoading}>
			{isLoading ? <span className={loaderStyle}></span> : text}
		</button>
	)
}

export default Button;