# System Design - schema design and API design

Schema Design, API Design, Scaling

Consider:

- System we want to build
- What libraries/frameworks/tech will help us accomplish core features? What API routes do we need
- Map/Schema of concept
- What potential bottlenecks when the application scales
- How do we handle bottlenecks? How can we optimize?

## Large Scale Systems

Trade offs to consider:

- Space
- Time
- Developer time/experience
- Budget
- User experience

Scalability:

- Horizontal (add more servers)
- Vertical (add more power/resources - CPU/Storage to server)

Reliability - what is the probability our system is going to fail at any given time period?

Availability - how long can our system remain operational to perform whatever it needs at any given time?

Efficiency - how much time does it take to do something?

- Latency: response time
- Throughput: how much volume in a given time frame

Serviceability - how easy is it to maintain or replair

Affordability - do we have the money to license, maintain, support, purchase hardware?

## Schema

## API

## Scaling

Load Balancing: share the load of traffic/requests across multiple servers (improves availabity and latency). Service checks to remove failed servers from the pool

- Least Connection Method - directs traffic to server with fewest active connections
- Least Response Method - directs traffic to server with fewest active connections and lowest average response time
- Least Bandwidth Method - directs traffic to server with least amount of traffic (in Mbps)
- Round Robin Method - cycles through list of servers and sends each new request to a new server
- Weighted Round Robin Method - attach a weight to each server that has different processing capabilities

# OOP Design - more client side design

Front-end
How do you design/scope out an application front to back? Consider:

- Mapping "real world objects" to programs
- How does the system work? What are the goals?
- What are the objects of the system?
- What are the relationships between/among objects?

Architect a system by separating the moving parts into logical components

## Encapsulation - bundle data and methods

- Information hiding - keep info hidden to prevent data tampering
  Ex: person obj may have phone number attribute; create method called getPhoneNumber to give "read access"

## Abstraction - result of encapsulation. Encapsulation is a method for abstraction.

- Hide everything but the relevant pieces/data about an obj
- Keeps things safe and simple
  Ex: User doesn't need to know how a coffee machine works, just that it will work

## Inheritance - derive classes from other classes to create hierarchy of classes to share a set of properties and methods

- Same base functions but with different features
  Ex: different coffee machines may do different specialized things, but ultimately all make coffee

## Object Composition Sidebar - combine objects to make larger, complex objects

- Functional components/compositions; you can chain many functions together
  Ex: putting together mutliple parts/buttons to make a more useful coffee maker

## Polymorphism - ability of an obj to take on may forms

Ex: chess piece can be a King, Queen, Bishop, Knight, Rook, Pawn, all of which have a different moveset

# Planning Object Oriented System

- Activity Diagrams - user stories in the form of a flow chart
  Ex: for a bus tracking app, you have users to consider, but also bus drivers, dispatchers
- Discuss different user stories, then activity diagrams to speak through the logic flow
- List out nouns or "actors" of the system and verbs or "actions" they can do with the system

# Class Diagrams - components that comprise our system and relationship among those components

- Similar to schema diagrams, use different boxes for classes and list their properties/methods
  Ex: ATM
  Components: Keypad (ATM part), Screen (ATM part), Deposit slot (ATM part), Network interface (connect to bank network), Reader (ATM part) - reader may have different types that inherit the reader class (PIN reader and check/cash reader), Account class (savings, checking, investment inherit from it)
