import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "tecktrove-next" });

//innegest func to save user data to database
export const syncUserCreation =inngest.createFunction(
    {
        id:'sync-user-from-clerk'
    },
    {
        event:'clerk/user.created'},
        async({event})=>{
            const {id,first_name, last_name, email_addresses, image_url}= event.data
            const userData ={
                _id:id,
                email:email_addresses[0].email_address,
                name:first_name +''+last_name,
                imageUrl:image_url
            }
            await connectDB()
            await User,create(userData)
        }
    )

    //to update function data in data base

    export const syncUserUpdation = inngest.createFunction(
        {
            id:'update-user-from-clerk'
        },
        {
            event:'clerk/user.updated'
        },
        async({event})=>{
            const {id,first_name,last_name,email_addresses,image_url}=event.data
            const userData={
                _id:id,
                email:email_addresses[0].emaail_address,
                name:frist_name+''+last_name,
                imageUrl:image_url
            }
            await connectDB()
            await User.findByIdAndUpdate(id,userData)
        }
    )

    //function to delete data 

    export const syncUserDeletion = inngest.createFunction(
        {
            id:'delete-user-from-clerk'
        },
        {
            event:'clerk/user.update'
        },
        async({event})=>{
            const{id}=event.data

            await connectDB()
            await user.findByIdAndDelete(id)
        }
    )