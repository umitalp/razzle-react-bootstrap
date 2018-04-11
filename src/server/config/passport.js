import LocalStrategy from 'passport-local'
import User from '../models/user'

const configurePassport = (passport) => {
    
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })

    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    (req, email, password, done) => { // callback with email and password from our form
        User.findOne({ 'email' :  email }, (err, user) => {
            if (err) return done(err)
            if (!user) return done(null, false, { message: 'Incorrect username.' })
            if (!user.validPassword(password)) return done(null, false, { message: 'Incorrect password.' })
            return done(null, user)
        })
    }))
 
    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true 
    },
    (req, email, password, done) => {
        process.nextTick(() => {
            User.findOne({ 'email' :  email }, function(err, user) {
                if (err) return done(err)
                if (user) return done(null, false, { message: 'That email is already taken.' })
                let newUser = new User()
                newUser.email = email
                newUser.password = newUser.generateHash(password)
                newUser.save((err) => {
                    if (err) throw err
                    return done(null, newUser)
                })
            })
        })
    }))

}

export default configurePassport
