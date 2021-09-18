import { api, LightningElement } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import myResource from '@salesforce/resourceUrl/expediteLogo';
import LOGO from '@salesforce/resourceUrl/expediteLogo';
export default class ForecastTable extends LightningElement {
	

@api logoUrl = LOGO;
@api lineItemData = [
	{
		unitPrice: 95,
		startMonth: "2/1/2019",
		revenueType: "MRC",
		revenueRecognitionName: null,
		revenueRecognitionId: null,
		qty: 1,
		productItemName: "Captio User Delegation",
		productItemId: "a01A000001gmFXZIA2",
		productFLIId: "a2m2G000000AJKQQA4",
		priorMRR: null,
		optionItemName: null,
		optionItemId: null,
		optionFLIId: null,
		monthsVR: null,
		monthsNRC: null,
		monthsMRC: null,
		months: 18,
		displayUnitPrice: "$95.00",
		displayQty: "1",
		displayPriorMRR: null,
		committed: "No",
		attributesWithValues: null,
		attributes: null,
		
	},
	{
		unitPrice: 55,
		startMonth: "3/1/2019",
		revenueType: "NRC",
		revenueRecognitionName: null,
		revenueRecognitionId: null,
		qty: 1,
		productItemName: "TNS Link",
		productItemId: "a01A000001utm3RIAQ",
		productFLIId: "a2m2G000009H0fHQAS",
		priorMRR: null,
		optionItemName: null,
		optionItemId: null,
		optionFLIId: null,
		monthsVR: null,
		monthsNRC: null,
		monthsMRC: null,
		months: 12,
		displayUnitPrice: "$55.00",
		displayQty: "1",
		displayPriorMRR: null,
		committed: "No",
		attributesWithValues: null,
		attributes: null
	},
	{
		unitPrice: 100,
		startMonth: "2/1/2019",
		revenueType: "MRC",
		revenueRecognitionName: null,
		revenueRecognitionId: null,
		qty: 1,
		productItemName: "TNS Link",
		productItemId: "a01A000001utm3RIAQ",
		productFLIId: "a2m2G000009H0fIQAS",
		priorMRR: null,
		optionItemName: null,
		optionItemId: null,
		optionFLIId: null,
		monthsVR: null,
		monthsNRC: null,
		monthsMRC: null,
		months: 24,
		displayUnitPrice: "$100.00",
		displayQty: "1",
		displayPriorMRR: null,
		committed: "No",
		attributesWithValues: null,
		attributes: null
	}
];
@api summaryYears = {
	status: "success",
	responseData: {
		yearsData: [
			{
				year: "2019",
				summaryAmount: "$2,190.80",
				lineData: [
					{
						recordId: "a2m2G000000AJKQQA4",
						amount: "$1,045.00"
					},
					{
						recordId: "a2m2G000009H0fIQAS",
						amount: "$1,100.00"
					},
					{
						recordId: "a2m2G000009H0fHQAS",
						amount: "$45.80"
					}
				]
			},
			{
				year: "2020",
				summaryAmount: "$1,874.20",
				lineData: [
					{
						recordId: "a2m2G000000AJKQQA4",
						amount: "$665.00"
					},
					{
						recordId: "a2m2G000009H0fIQAS",
						amount: "$1,200.00"
					},
					{
						recordId: "a2m2G000009H0fHQAS",
						amount: "$9.20"
					}
				]
			},
			{
				year: "2021",
				summaryAmount: "$100.00",
				lineData: [
					{
						recordId: "a2m2G000009H0fIQAS",
						amount: "$100.00"
					}
				]
			}
		]
	},
	message: null
};
@api vsummaryMonths = {
	status: "success",
	responseData: {
		summaryAmount: [
			"$195.00",
			"$199.58",
			"$199.58",
			"$199.58",
			"$199.58",
			"$199.58",
			"$199.58",
			"$199.58",
			"$199.58",
			"$199.58",
			"$199.58",
			"$199.58",
			"$199.62",
			"$195.00",
			"$195.00",
			"$195.00",
			"$195.00",
			"$195.00",
			"$100.00",
			"$100.00",
			"$100.00",
			"$100.00",
			"$100.00",
			"$100.00"
		],
		startYear: 2019,
		startMonth: 2,
		linesData: [
			{
				startYear: 2019,
				startMonth: 2,
				recordId: "a2m2G000000AJKQQA4",
				data: [
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00",
					"$95.00"
				]
			},
			{
				startYear: 2019,
				startMonth: 2,
				recordId: "a2m2G000009H0fIQAS",
				data: [
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00",
					"$100.00"
				]
			},
			{
				startYear: 2019,
				startMonth: 3,
				recordId: "a2m2G000009H0fHQAS",
				data: [
					"$4.58",
					"$4.58",
					"$4.58",
					"$4.58",
					"$4.58",
					"$4.58",
					"$4.58",
					"$4.58",
					"$4.58",
					"$4.58",
					"$4.58",
					"$4.62"
				]
			}
		]
	},
	message: null
};


@api boolVisible = false;  
@api summaryData={};
@api iconDisplay="";
//@api te=this.summaryYears.responseData.yearsData;
connectedCallback(){
	
	console.log('on load'+this.summaryYears.status);
this.tableMethod();
}
handleClick() {  
	 if(this.boolVisible == false){
		this.boolVisible = true;  
this.iconDisplay="utility:check";
	 }
	 else{
		this.boolVisible = false;  
this.iconDisplay=""; 
	 }
}  
tableMethod() {

var objID;
var object;
const month={
	1:'Jan',2:'Feb',3:'Mar',4:'Apr',5:'May',6:'Jun',7:'Jul',8:'Aug',9:'Sep',10:'Oct',11:'Nov',12:'Dec'
};
//adding year values into json

  for (var i = 0; i < this.lineItemData.length; i++) {
	object = this.lineItemData[i];
	for (var pro in object) {
		console.log('item ' + i + ': ' + pro + '=' + object[pro]);
		object[pro]==null ? object[pro]='N/A' : object[pro]
		//object['Amount2019']='test';
          
		if(pro=='productFLIId'){
			objID=object[pro];
			//year code
			for (var j = 0; j < this.summaryYears.responseData.yearsData.length; j++) {
				var object1 = this.summaryYears.responseData.yearsData[j];
				for (var pro1 in object1) {
					console.log('item55 ' + j + ': ' + pro1 + '=' + object1[pro1]);
					if(pro1=='lineData'){
                 console.log('testingg');
				 this.summaryData['y'+object1['year']]=object1['summaryAmount'];
				 for (var k = 0; k < object1.lineData.length; k++) {
					var object2 = object1.lineData[k];
					for (var pro2 in object2) {
						console.log('item66 ' + k + ': ' + pro2 + '=' + object2[pro2]);
						console.log('objID'+objID+',,,'+object2[pro2]);
						   if(pro2=='recordId' && object2[pro2]==objID){
							
							console.log('object1[year]'+object1['year']+',,'+object1.year);
							console.log('object[Amount2019]'+object['Amount2019']+',,'+object2['amount']);
							
							object1['year']=="2019" ? object['Amount2019']=object2['amount'] : 0
							object1.year=="2020" ? object['Amount2020']=object2['amount'] : 0
							object1.year=="2021" ? object['Amount2021']=object2['amount'] : 0
							console.log('object[Amount2019]'+object['Amount2019']+',,'+object['Amount2020']);
							//console.log('year==='+);
						   }}}
				
				
				
				}
				}}
// months
//adding months values into json
var year;
var countYear;
var Amountvalue;
var yearMon='';
for (var l = 0; l < this.vsummaryMonths.responseData.linesData.length; l++) {
	var object3 = this.vsummaryMonths.responseData.linesData[l];
	for (var pro3 in object3) {
		
        if(pro3=='recordId' && object3[pro3]==objID){
			var presentMon=0;
			year=parseInt(object3['startYear']);
			
			presentMon= parseInt(object3['startMonth']);
			for (var m = 0; m < object3.data.length; m++) {
				countYear++
				
				
				yearMon=month[presentMon]+''+year;
				console.log('yearMon'+yearMon);
				object[yearMon]=object3.data[m];
				//this.summaryData[yearMon]=this.vsummaryMonths.responseData.summaryAmount[m];
				presentMon++;
			    if(presentMon>12){
					year++;
					countYear=0;
					presentMon=1;
				}
				console.log('countYear'+countYear);
				console.log('year'+year);

				console.log('presentMon'+presentMon);
				console.log('month wise11'+object[yearMon]+':'+object3.data[m]);	
			console.log('array data'+m+'value is '+object3.data[m]);	
			}

			
		}
	
	}

}

	}
		
		//object['testing']['tt']='test2';
		//this.totalJson[pro] = object[pro];
	}
	

  }
  //adding summary values into new json
 var presentMon1;
 year=parseInt(this.vsummaryMonths.responseData.startYear);
			
	presentMon1= parseInt(this.vsummaryMonths.responseData.startMonth);

for (var p = 0; p < this.vsummaryMonths.responseData.summaryAmount.length; p++) {
	var object4=this.vsummaryMonths.responseData.summaryAmount[p];
	console.log('object4.summaryAmount'+object4);
	
yearMon=month[presentMon1]+''+year;
		console.log('yearMon'+yearMon);
		this.summaryData[yearMon]=object4;
		console.log('object4.summaryAmount[p]'+object4);
	
		presentMon1++;
		if(presentMon1>12){
			year++;
			countYear=0;
			presentMon1=1;
		}
	}


}


}