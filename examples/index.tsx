import React, {
  ChangeEvent,
  Component,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import TextArea from '../source/index'

import './base.css'

// export default {
//   title: 'ExpandingTextarea',
//   component: TextArea,
//   parameters: {},
// }

// const defaultArgs = {
//   maxLength: 3000,
//   placeholder: 'Enter details here...',
// }

// export const FancyTextarea = ({ maxLength, placeholder }) => {
//   const textareaRef = useRef<HTMLTextAreaElement>(null)

//   const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
//     console.log(e.target.value)
//   }, [])

//   useEffect(() => {
//     textareaRef.current?.focus()
//   }, [])

//   return (
//     <main>
//       <h1>Minimalist textarea</h1>
//       <label htmlFor="my-textarea">Please Enter Some Details:</label>
//       <TextArea
//         className="textarea"
//         defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//         id="my-textarea"
//         maxLength={maxLength}
//         name="pet[notes]"
//         onChange={handleChange}
//         placeholder={placeholder}
//         ref={textareaRef}
//         rows="1"
//         style={{ display: 'block', width: '350px' }}
//       />
//     </main>
//   )
// }

// FancyTextarea.args = defaultArgs

// export const RegularTextarea = ({ maxLength, placeholder }) => {
//   const textareaRef = useRef<HTMLTextAreaElement>(null)

//   const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
//     console.log(e.target.value)
//   }, [])

//   useEffect(() => {
//     textareaRef.current?.focus()
//   }, [])

//   return (
//     <main>
//       <h1>Regular textarea</h1>
//       <label htmlFor="my-textarea">Please Enter Some Details:</label>
//       <TextArea
//         defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//         id="my-textarea"
//         maxLength={maxLength}
//         name="pet[notes]"
//         onChange={handleChange}
//         placeholder={placeholder}
//         ref={textareaRef}
//         style={{ display: 'block', width: '300px' }}
//       />
//     </main>
//   )
// }

// RegularTextarea.args = defaultArgs

// export const Minimum3Rows = ({ maxLength, placeholder }) => {
//   const textareaRef = useRef<HTMLTextAreaElement>(null)

//   const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
//     console.log(e.target.value)
//   }, [])

//   useEffect(() => {
//     textareaRef.current?.focus()
//   }, [])

//   return (
//     <main>
//       <h1>Regular textarea with minimum 3 rows</h1>
//       <label htmlFor="my-textarea">Please Enter Some Details:</label>
//       <TextArea
//         defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//         id="my-textarea"
//         maxLength={maxLength}
//         name="pet[notes]"
//         onChange={handleChange}
//         placeholder={placeholder}
//         ref={textareaRef}
//         rows="3"
//         style={{ display: 'block', width: '300px' }}
//       />
//     </main>
//   )
// }

// Minimum3Rows.args = defaultArgs

// export const MaxHeight = ({ maxLength, placeholder }) => {
//   const textareaRef = useRef<HTMLTextAreaElement>(null)

//   const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
//     console.log(e.target.value)
//   }, [])

//   useEffect(() => {
//     textareaRef.current?.focus()
//   }, [])

//   return (
//     <main>
//       <h1>Minimalist textarea with a max-height</h1>
//       <label htmlFor="my-textarea">Please Enter Some Details:</label>
//       <TextArea
//         className="textarea"
//         defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//         id="my-textarea"
//         maxLength={maxLength}
//         name="pet[notes]"
//         onChange={handleChange}
//         placeholder={placeholder}
//         ref={textareaRef}
//         rows="1"
//         style={{ display: 'block', maxHeight: '100px', width: '350px' }}
//       />
//     </main>
//   )
// }

// MaxHeight.args = defaultArgs

// type FunctionRefProps = {
//   maxLength: number
//   placeholder: string
// }

// interface FunctionRefState {
//   value: string
// }

// class FunctionRefComp extends Component<FunctionRefProps, FunctionRefState> {
//   el: HTMLTextAreaElement | null = null

//   constructor(props: FunctionRefProps) {
//     super(props)
//     this.state = {
//       value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     }
//   }

//   handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     this.setState({ value: e.currentTarget.value })
//   }

//   setRef = (node: HTMLTextAreaElement): void => {
//     this.el = node
//   }

//   render() {
//     console.log(this.el)
//     const { maxLength, placeholder } = this.props

//     return (
//       <main>
//         <h1>Textarea component that receives a callback ref</h1>
//         <label htmlFor="my-textarea">Please Enter Some Details:</label>
//         <TextArea
//           id="my-textarea"
//           maxLength={maxLength}
//           name="pet[notes]"
//           onChange={this.handleChange}
//           placeholder={placeholder}
//           ref={this.setRef}
//           style={{ display: 'block', width: '300px' }}
//           value={this.state.value}
//         />
//       </main>
//     )
//   }
// }

// export const FunctionRef = ({ maxLength, placeholder }) => {
//   return <FunctionRefComp maxLength={maxLength} placeholder={placeholder} />
// }

// FunctionRef.args = defaultArgs

// export const ValueFromProps = ({ maxLength, placeholder, value }) => {
//   const textareaRef = useRef<HTMLTextAreaElement>(null)

//   useEffect(() => {
//     textareaRef.current?.focus()
//   }, [])

//   return (
//     <main>
//       <h1>Minimalist textarea</h1>
//       <label htmlFor="my-textarea">Please Enter Some Details:</label>
//       <TextArea
//         className="textarea"
//         id="my-textarea"
//         maxLength={maxLength}
//         name="pet[notes]"
//         placeholder={placeholder}
//         ref={textareaRef}
//         rows="1"
//         style={{ display: 'block', width: '350px' }}
//         value={value}
//       />
//     </main>
//   )
// }

// FunctionRef.args = { ...defaultArgs, value: 'Lorem ipsum dolor sit amet...' }

// export const StyleChanges = () => {
//   const [isWide0, setIsWide0] = useState(false)
//   const [isWide1, setIsWide1] = useState(false)
//   const [, setCounter0] = useState(0)
//   const [, setCounter1] = useState(0)

//   const handleClickToggle0 = useCallback(() => {
//     setIsWide0(x => !x)
//   }, [])

//   const handleClickToggle1 = useCallback(() => {
//     setIsWide1(x => !x)
//   }, [])

//   const handleClickCounter0 = useCallback(() => {
//     setCounter0(x => x + 1)
//   }, [])

//   const handleClickCounter1 = useCallback(() => {
//     setCounter1(x => x + 1)
//   }, [])

//   return (
//     <main>
//       <h1>Textarea&apos;s width / style changes</h1>
//       <section>
//         <h2>Toggling the parent&apos;s width</h2>
//         <p>
//           When it goes from smaller to larger, there should not be any extra
//           whitespace leftover at the bottom from its height when it was small.
//           This will only work if <code>ResizeObserver</code> is available in
//           your browser.
//         </p>
//         <button onClick={handleClickToggle0} type="button">
//           Toggle textarea parent&apos;s width
//         </button>
//         <button onClick={handleClickCounter0} type="button">
//           Force a state update (for testing)
//         </button>
//         <div>
//           <label htmlFor="my-textarea0">Please Enter Some Details:</label>
//           <div style={{ width: isWide0 ? 400 : 200 }}>
//             <TextArea
//               defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dsa
// das
// d
// dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor"
//               id="my-textarea0"
//               style={{ display: 'block', width: '100%' }}
//             />
//           </div>
//         </div>
//       </section>
//       <section>
//         <h2>Toggling the textarea&apos;s width</h2>
//         <button onClick={handleClickToggle1} type="button">
//           Toggle textarea width
//         </button>
//         <button onClick={handleClickCounter1} type="button">
//           Force a state update (for testing)
//         </button>
//         <div>
//           <label htmlFor="my-textarea1">Please Enter Some Details:</label>
//           <TextArea
//             defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dsa
// das
// d
// dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor"
//             id="my-textarea1"
//             style={{ display: 'block', width: isWide1 ? 400 : 200 }}
//           />
//         </div>
//       </section>
//     </main>
//   )
// }
