import { Injectable } from '@angular/core';


export interface Header {
  name: string;
  

}

export interface Body {
  titles: string[];
  info:string;

}

@Injectable({
  providedIn: 'root'
})




export class ServiceService {

  constructor() { }

  getHeader(){
    let head:Header={name:'-FAQ-'};
    //return this.http.get<head>('https://goldenhippo.com.php',"faq") ;
    
    return head;

  }
  getHeaderMobile(){
    let head:Header={name:'Frequently Asked Questions'};
    //return this.http.get<head>('https://goldenhippo.com.php',"faq") ;
    
    return head;

  }
  getBody(){
    let body:Body [];
    body=[
          {titles:["Does each dog breed need a different food?"],
           info:"They do not! I designed this formula to be the best overall diet for dogs of any breed, and in any health condition. The nutrient profile contains every ingredient your dog’s body needs to live its longest, healthiest life possible."
          },
          {titles:['What is the complete ingredient list?'],
           info:"Turkey, Beef, Salmon, Duck, Beef Liver, Turkey Liver, Turkey Hearts, Flaxseed, Sweet Potato, Eggs, Pea Protein, Apples, Blueberries, Carrots, Cranberries, Pumpkin Seed, Spinach, Dried Kelp, Ginger, Salt, Sunflower Seed, Broccoli, Kale, Mixed tocopherols (Preservative)"
          },
          {titles:["Why is this formula freeze-dried?"],
           info:"Most dog food companies cook their food extensively — which strips it of all the nutritional value. Dr. Marty Nature\'s Blend is designed to mimic what your dog would eat in the wild — while also ensuring your dog gets the maximum nutritional content from every meal." 
          },  
          { titles:["What if it doesn’t work for my dog?","Is there a guarantee?"],
            info:"Turkey, Beef, Salmon, Duck, Beef Liver, Turkey Liver, Turkey Hearts, Flaxseed, Sweet Potato, Eggs, Pea Protein, Apples, Blueberries, Carrots, Cranberries, Pumpkin Seed, Spinach, Dried Kelp, Ginger, Salt, Sunflower Seed, Broccoli, Kale, Mixed tocopherols (Preservative)"
          },    
          { titles:["How do I prepare Dr. Marty Nature's Blend?"],
            info:'It’s easy to prepare — simply pull out the number of nuggets that are recommended for your dog’s age and weight, then add water. Three minutes later, the food is ready to eat!'
          }    
        ]

    //None Breaking Space
    for(let i=0;i<body.length;i++)    
     {
         for(let j=0;j<body[i].titles.length;j++)
         { 
            body[i].titles[j]=body[i].titles[j].replace('Dr. Marty','Dr.\u00A0Marty');
            body[i].titles[j]=body[i].titles[j].replace("Nature's Blend","Nature's\u00A0Blend");
            
         }
          body[i].info=body[i].info.replace("Dr. Marty","Dr.\u00A0Marty");
          body[i].info=body[i].info.replace("Nature's Blend","Nature's\u00A0Blend");
          

     }

    return body;    



  }
  
}

